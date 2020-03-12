import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
