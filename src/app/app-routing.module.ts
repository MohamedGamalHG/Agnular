import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './product/add-item/add-item.component';
import { ShowItemComponent } from './product/show-item/show-item.component';
import { EditItemComponent } from './product/edit-item/edit-item.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './components/users/users.component';

const routes:Routes = [
  {path:'',component:ShowItemComponent},
  {path:'add',component:AddItemComponent},
  {path:'edit/:id',component:EditItemComponent},
  {path:'home',component:HomeComponent},
  {path:'post',component:PostComponent},
  {path:'user',component:UsersComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
