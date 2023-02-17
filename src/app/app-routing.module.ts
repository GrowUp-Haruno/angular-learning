import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { MembersComponent } from 'src/app/members/members.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard',pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
