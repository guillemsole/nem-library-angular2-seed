import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterializeModule} from "angular2-materialize";
import {RouterModule} from '@angular/router';
import {
  AccountHttp,
  AccountListener,
  BlockchainListener,
  BlockHttp,
  ChainHttp,
  ConfirmedTransactionListener,
  MosaicHttp,
  NamespaceHttp,
  NEMLibrary,
  NetworkTypes,
  NodeHttp,
  TransactionHttp,
  UnconfirmedTransactionListener
} from "nem-library";
import {Angulartics2GoogleAnalytics, Angulartics2Module} from 'angulartics2';

import {BlockchainListenerProvider} from "./providers/BlockchainListenerProvider";
import {UnconfirmedTransactionListenerProvider} from "./providers/UnconfirmedTransactionListenerProvider";
import {AccountHttpProvider} from "./providers/AccountHttpProvider";


import {AppComponent} from './app.component';
import {AccountListenerProvider} from "./providers/AccountListenerProvider";
import {BlockHttpProvider} from "./providers/BlockHttpProvider";
import {ChainHttpProvider} from "./providers/ChainHttpProvider";
import {ConfirmedTransactionListenerProvider} from "./providers/ConfirmedTransactionListenerProvider";
import {MosaicHttpProvider} from "./providers/MosaicHttpProvider";
import {NamespaceHttpProvider} from "./providers/NamespaceHttpProvider";
import {NodeHttpProvider} from "./providers/NodeHttpProvider";
import {TransactionHttpProvider} from "./providers/TransactionHttpProvider";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    RouterModule.forRoot([]),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [
    {provide: AccountHttp, useFactory: AccountHttpProvider},
    {provide: AccountListener, useFactory: AccountListenerProvider},
    {provide: BlockchainListener, useFactory: BlockchainListenerProvider},
    {provide: BlockHttp, useFactory: BlockHttpProvider},
    {provide: ChainHttp, useFactory: ChainHttpProvider},
    {provide: ConfirmedTransactionListener, useFactory: ConfirmedTransactionListenerProvider},
    {provide: MosaicHttp, useFactory: MosaicHttpProvider},
    {provide: NamespaceHttp, useFactory: NamespaceHttpProvider},
    {provide: NodeHttp, useFactory: NodeHttpProvider},
    {provide: TransactionHttp, useFactory: TransactionHttpProvider},
    {provide: UnconfirmedTransactionListener, useFactory: UnconfirmedTransactionListenerProvider},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
