import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './github.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    GithubComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // GithubService,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
