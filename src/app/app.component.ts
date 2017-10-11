import { Component } from '@angular/core';
import {
  AccountHttp,
  Address,
  Block,
  BlockchainListener,
  Pageable,
  Transaction,
  UnconfirmedTransactionListener
} from 'nem-library';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Listeners
  blockSubscription;
  unconfirmedTransactionsSubscription;

  blocks: Block[] = [];
  incomingTransactions: Transaction[] = [];
  allTransactionsPaginated: Pageable<Transaction[]>;
  allTransactions: Transaction[] = [];

  // View
  blockListenerActive = false;
  unconfirmedTransactionsActive = false;
  allTransactionsActive = false;

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private blockchainListener: BlockchainListener,
    private unconfirmedTransactionListener: UnconfirmedTransactionListener,
    private accountHttp: AccountHttp) {
  }

  startFetchingTransactions(address_raw: string) {
    try {
      const address = new Address(address_raw.trim());
      console.log(address);
      this.allTransactions = [];
      this.allTransactionsPaginated =
        this.accountHttp.allTransactionsPaginated(address, {
          pageSize: 5
        });

      this.allTransactionsPaginated.subscribe(x => {
        this.allTransactions = this.allTransactions.concat(x);
      });
      this.allTransactionsActive = true;
    } catch (e) {
      alert('malformed address');
    }

  }

  fetchMoreTransactions() {
    if (this.allTransactionsActive) {
      this.allTransactionsPaginated.nextPage();
    }
  }

  changeBlockListener() {
    if (this.blockListenerActive) {
      this.blockSubscription.unsubscribe();
      console.log('Unsubscribed');
    } else {
      this.blockSubscription = this.blockchainListener.newBlock()
        .subscribe(block => {
          console.log('NEW BLOCK', block);
          this.blocks.unshift(block);
        }, err => {
          console.error('blockchainListener', err);
        });
      console.log('subscribed');
    }
    this.blockListenerActive = !this.blockListenerActive;
  }

  stopUnconfirmedListener() {
    if (this.unconfirmedTransactionsActive) {
      this.unconfirmedTransactionsSubscription.unsubscribe();
      console.log('Unsubscribed');
    }
    this.unconfirmedTransactionsActive = false;
  }

  start(raw_address: string) {
    let address: Address;
    try {
      address = new Address(raw_address);
      this.unconfirmedTransactionsSubscription =
        this.unconfirmedTransactionListener
          .given(address)
          .subscribe(transaction => {
            console.log('unconfirmedTransactionListener for ' + raw_address, transaction);
            this.incomingTransactions.unshift(transaction);
          }, err => {
            console.error('unconfirmedTransactionListener for ' + raw_address, err)
          });
      this.unconfirmedTransactionsActive = true;
    } catch (e) {
      alert('malformed address');
    }

  }
}
