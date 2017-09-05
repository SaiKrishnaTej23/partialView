import { Injectable, ComponentFactoryResolver, OnInit,
   ComponentFactory, Injector, ApplicationRef, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { PartialViewComponent } from './partial-view/partial-view.component';

@Injectable()
export class PartialViewService implements OnInit {
  componentRefArray: Array<ComponentRef<PartialViewComponent>>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  ngOnInit() {

  }

  open(componentrefSent?: any) {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
    .resolveComponentFactory(PartialViewComponent)
    .create(this.injector);

    // componentrefSent = componentrefSent === undefined ? DefaultPartialViewComponent : componentrefSent;
    componentRef.instance.componentRef = componentrefSent;

    if (this.componentRefArray === undefined) {
      this.componentRefArray = new Array<ComponentRef<PartialViewComponent>>();
    }
    this.componentRefArray.push(componentRef);
  // 2. Attach component to the appRef so that it's inside the ng component tree
  this.appRef.attachView(componentRef.hostView);

  // 3. Get DOM element from component
  const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
    .rootNodes[0] as HTMLElement;

  // 4. Append DOM element to the body
  document.body.appendChild(domElem);

  // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
        this.close();
    }, 10000);
 }

 close() {
   const componentRef = this.componentRefArray[this.componentRefArray.length - 1];
    this.componentRefArray.pop();
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
 }
}
