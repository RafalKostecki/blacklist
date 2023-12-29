import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { RecordComponent } from './components/record/record.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blacklisted', pathMatch: 'full' },
  { path: 'blacklisted', component: ListComponent },
  { path: 'blacklisted/:id', component: RecordComponent },
];
