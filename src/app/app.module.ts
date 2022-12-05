import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './product/add-item/add-item.component';
import { EditItemComponent } from './product/edit-item/edit-item.component';
import { ShowItemComponent } from './product/show-item/show-item.component';
import { HomeComponent } from './home/home.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    EditItemComponent,
    ShowItemComponent,
    HomeComponent,
    PostComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   LazyLoadImageModule,
   ReactiveFormsModule ,
   HttpClientModule,
   FormsModule,
   DataTablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
