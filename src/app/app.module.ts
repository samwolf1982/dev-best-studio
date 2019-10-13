import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardShowComponent } from './card-show/card-show.component';
import { InitiatorJqueryComponent } from './initiator-jquery/initiator-jquery.component';

@NgModule({
  declarations: [
    AppComponent,
    CardShowComponent,
    InitiatorJqueryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
