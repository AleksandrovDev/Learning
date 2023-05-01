import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from './month-view/month-view.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {
    path: 'month-view',
    component: MonthViewComponent,
  },
  {
    path: 'tracker',
    component: TrackerComponent,
  },
  {
    path: '', redirectTo: 'tracker', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
