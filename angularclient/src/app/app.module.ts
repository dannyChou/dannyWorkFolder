import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';


import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MyDemoComponent } from './my-demo/my-demo.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    MyDemoComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
