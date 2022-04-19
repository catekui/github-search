import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
// import { NgModel } from '@angular/forms';
import { FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { FormComponent } from './form/form.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './github.service';

import { DatePipePipe } from './date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // FormComponent,
    GithubComponent,
    
    DatePipePipe, 
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    // NgModel,
    FormsModule
  ],
  providers: [ GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
