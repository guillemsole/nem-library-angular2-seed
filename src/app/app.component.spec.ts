import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from "angulartics2";
import {RouterTestingModule} from "@angular/router/testing";
import {AccountHttpProvider} from "./providers/AccountHttpProvider";
import {AccountHttp, BlockchainListener, UnconfirmedTransactionListener} from "nem-library";
import {UnconfirmedTransactionListenerProvider} from "./providers/UnconfirmedTransactionListenerProvider";
import {BlockchainListenerProvider} from "./providers/BlockchainListenerProvider";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: BlockchainListener, useFactory: BlockchainListenerProvider},
        {provide: UnconfirmedTransactionListener, useFactory: UnconfirmedTransactionListenerProvider},
        {provide: AccountHttp, useFactory: AccountHttpProvider}
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
