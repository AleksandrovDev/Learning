import { Component } from '@angular/core';
import { TrackerService } from '../tracker/services/tracker.service';

@Component({
  selector: 'budget-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.less'],
  // duplicate service in providers to get a separate instanse of this service
  providers: [TrackerService],
})
export class MonthViewComponent {
  monthName = 'January';

  constructor(private readonly trackerService: TrackerService) {}
}
