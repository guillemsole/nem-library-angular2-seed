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
  blockchainObservable: Subscription;

  blocks: Block[] = [];
  incomingTransactions: Transaction[] = [];
  allTransactionsPaginated: Pageable<Transaction[]>;
  allTransactions: Transaction[] = [];

  // View
  blockListenerActive: boolean = true;

  constructor(private blockchainListener: BlockchainListener,
              private unconfirmedTransactionListener: UnconfirmedTransactionListener,
              private accountHttp: AccountHttp) {
    this.blockchainObservable = blockchainListener.newBlock().subscribe(block => {
      this.blocks.unshift(block);
    });

    unconfirmedTransactionListener.given(new Address("TCJZJH-AV63RE-2JSKN2-7DFIHZ-RXIHAI-736WXE-OJGA"))
      .subscribe(transaction => {
        this.incomingTransactions.unshift(transaction);
      });

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
      this.blockchainObservable.unsubscribe();
      console.log("Unsubscribed")
    } else {
      this.blockchainObservable = this.blockchainListener.newBlock()
        .subscribe(block => {
          this.blocks.unshift(block);
        });
      console.log("subscribed");
    }
    this.blockListenerActive = !this.blockListenerActive;
  }
}
