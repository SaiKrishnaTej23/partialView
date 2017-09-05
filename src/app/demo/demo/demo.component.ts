import { Component, OnInit } from '@angular/core';
import { PartialViewService } from '../../partial-view/partial-view.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 Time: Date;
  constructor(private service: PartialViewService) { }

  ngOnInit() {
    this.Time = new Date();
  }

  open() {
    this.service.open(DemoComponent);
  }
  close() {
    this.service.close();
  }
}
