import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContextMenuModule } from 'ngx-contextmenu';

import { AppComponent } from './app.component';
import { IpaipcdocComponent } from './project/ipaipcdoc/ipaipcdoc.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    IpaipcdocComponent,
    
  
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ContextMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
