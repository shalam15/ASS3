import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { UserpageComponent } from './components/userpage/userpage.component';



@NgModule({
  declarations: 
  [
    UserlistComponent, 
    UsercardComponent, 
    UserpageComponent]
    ,
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
