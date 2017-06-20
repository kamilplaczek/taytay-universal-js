import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {BrowserTransferStateModule} from '../modules/transfer-state/browser-transfer-state.module';
import {BrowserPrebootModule} from 'preboot/browser';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'taytay'
    }),
    BrowserTransferStateModule,
    BrowserPrebootModule.replayEvents(),
    AppModule
  ]
})
export class BrowserAppModule {
}
