import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { MonthViewComponent } from '../month-view/month-view.component';
import { TrackerService } from '../account-list/tracker/services/tracker.service';

@Component({
  selector: 'budget-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  // providers: [TrackerService],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(MonthViewComponent) month!: MonthViewComponent;

  // @Host deacorator set up for the parent component so all the children will use it
  // They won't go above this level to search for the dependancy injection
  constructor(
    // @Host()
    private readonly trackerService: TrackerService) {}

  ngAfterContentInit(): void {
    console.log(this.month);
    this.month.monthName = 'ChangedJanuary';
  }
}
