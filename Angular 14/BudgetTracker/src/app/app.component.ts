import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TrackerComponent } from './tracker/tracker.component';

@Component({
  selector: 'budget-root',
  templateUrl: './app.component.html',
  template: `<h1>Budget Tracker</h1>
    <p>Ang</p>`,
  styleUrls: ['./app.component.less'],
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'BudgetTracker';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Budget tracker';
  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(TrackerComponent); // dynamic template loading
    componentRef.instance.role = 'User';
  }
}
