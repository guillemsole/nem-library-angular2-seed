import {Component} from '@angular/core';
import {
  AccountHttp,
  Address,
  Block,
  BlockchainListener,
  Pageable,
  Transaction,
  UnconfirmedTransactionListener
} from "nem-library";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Listeners
  blockSubscription: Subscription;
  unconfirmedTransactionsSubscription: Subscription;

  blocks: Block[] = [];
  incomingTransactions: Transaction[] = [];
  allTransactionsPaginated: Pageable<Transaction[]>;
  allTransactions: Transaction[] = [];

  // View
  blockListenerActive: boolean = false;

  constructor(private blockchainListener: BlockchainListener,
              private unconfirmedTransactionListener: UnconfirmedTransactionListener,
              private accountHttp: AccountHttp) {

    // this.changeBlockListener();
    this.allTransactionsPaginated = accountHttp.allTransactionsPaginated(new Address("TCJZJH-AV63RE-2JSKN2-7DFIHZ-RXIHAI-736WXE-OJGA"), undefined, 5);

    this.allTransactionsPaginated.subscribe(x => {
      this.allTransactions = this.allTransactions.concat(x);
    })
  }

  fetchMoreTransactions() {
    this.allTransactionsPaginated.nextPage();
  }

  changeBlockListener() {
    if (this.blockListenerActive) {
      this.blockSubscription.unsubscribe();
      console.log("Unsubscribed")
    } else {
      this.blockSubscription = this.blockchainListener.newBlock()
        .subscribe(block => {
          console.log("NEW BLOCK", block);
          this.blocks.unshift(block);
        }, err => {
          console.error("blockchainListener", err);
        });
      console.log("subscribed");
    }
    this.blockListenerActive = !this.blockListenerActive;
  }

  changeUnconfirmedTransactions(address: string) {
    this.unconfirmedTransactionsSubscription =
      this.unconfirmedTransactionListener
        .given(new Address(address))
        .subscribe(transaction => {
          console.log("unconfirmedTransactionListener for " + address, transaction);
          this.incomingTransactions.unshift(transaction);
        }, err => {
          console.error("unconfirmedTransactionListener for " + address, err)
        });
  }
}
