import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { MonthViewComponent } from '../month-view/month-view.component';

@Component({
  selector: 'budget-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(MonthViewComponent) month!: MonthViewComponent;
  
  ngAfterContentInit(): void {
    console.log(this.month);
    this.month.monthName = 'ChangedJanuary';
  }
}
