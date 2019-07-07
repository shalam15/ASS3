import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { AboutModule } from './about/about.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, Router, RouterModule, ROUTES } from '@angular/router';
import { UserpageComponent } from './users/components/userpage/userpage.component';
import { UserlistComponent } from './users/components/userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    UsersModule,
    AboutModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
