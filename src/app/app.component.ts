import { Component } from '@angular/core';
import { BlockchainListener, Block, UnconfirmedTransactionListener, Address, Transaction, AccountHttp, Pageable } from "nem-library";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blocks: Block[] = [];
  incomingTransactions: Transaction[] = [];
  allTransactionsPaginated: Pageable<Transaction[]>;
  allTransactions: Transaction[] = [];

  constructor(blockchainListener: BlockchainListener,
    unconfirmedTransactionListener: UnconfirmedTransactionListener,
    accountHttp: AccountHttp
  ) {
    blockchainListener.newBlock()
      .subscribe(block => {
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
}
