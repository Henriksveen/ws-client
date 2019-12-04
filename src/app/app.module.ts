import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxsWebsocketPluginModule} from '@ngxs/websocket-plugin';
import {KafkaState} from './state/kafka.state';
import {NgxsModule} from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      KafkaState
    ]),
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:8080/websocket'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
