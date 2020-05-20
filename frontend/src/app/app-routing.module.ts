import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateComponent } from './components/private/private.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { AuthGuard } from './auth.guard'

const routes: Routes = [
	{
		path: '',
		redirectTo: '/tasks',
		pathMatch: 'full'
	},
	{
		path: 'tasks',
		component: TasksComponent
	},
	{
		path: 'private',
		component: PrivateComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: 'signin',
		component: SigninComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
