import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from "angular2-materialize";
import {BlockchainListener, NEMLibrary, NetworkTypes, UnconfirmedTransactionListener, AccountHttp} from "nem-library";
import {BlockchainListenerProvider} from "./providers/BlockchainListenerProvider";
import {UnconfirmedTransactionListenerProvider} from "./providers/UnconfirmedTransactionListenerProvider";
import {AccountHttpProvider} from "./providers/AccountHttpProvider";


import { AppComponent } from './app.component';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [
    {provide: BlockchainListener, useFactory: BlockchainListenerProvider},
    {provide: UnconfirmedTransactionListener, useFactory: UnconfirmedTransactionListenerProvider},
    {provide: AccountHttp, useFactory: AccountHttpProvider}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
