import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './users/components/userpage/userpage.component';
import { UserlistComponent } from './users/components/userlist/userlist.component';
import { AboutpageComponent } from './about/components/aboutpage/aboutpage.component'




const routes: Routes = [
  // be default we show Todo list component
  {path: '', component: UserlistComponent},
  {path: 'users', component: UserpageComponent},
  {path: 'user/:id', component: UserpageComponent},
  {path: 'about', component: AboutpageComponent},
  {path: '**', component: UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
