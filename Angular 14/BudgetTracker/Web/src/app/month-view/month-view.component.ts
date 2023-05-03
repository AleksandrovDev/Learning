import { Component, Self } from '@angular/core';
import { TrackerService } from '../account-list/tracker/services/tracker.service';

@Component({
  selector: 'budget-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.less'],
  // duplicate service in providers to get a separate instanse of this service
  providers: [TrackerService], 
})
export class MonthViewComponent {
  monthName = 'January';

  //@Self decorator makes sure that this trackerServis available in this compmonent in providers
  constructor(@Self() private readonly trackerService: TrackerService) {}
}
