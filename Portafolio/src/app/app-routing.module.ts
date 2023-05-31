import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component'; 
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component'; 
import { UnityComponent } from './unity/unity.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'react', component: ReactComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'unity', component: UnityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
