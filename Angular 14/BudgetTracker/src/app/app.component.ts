import { Component } from '@angular/core';

@Component({
  selector: 'budget-root',
  templateUrl: './app.component.html',
  template: `<h1>Budget Tracker</h1>
  <p>Ang </p>`,
  styleUrls: ['./app.component.less'],
  styles: [`h1 { color: red; }`],
})
export class AppComponent {
  title = 'BudgetTracker';
}
