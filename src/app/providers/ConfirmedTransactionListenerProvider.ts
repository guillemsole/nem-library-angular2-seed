import {ConfirmedTransactionListener} from 'nem-library';

export function ConfirmedTransactionListenerProvider(): ConfirmedTransactionListener {
  return new ConfirmedTransactionListener();
}
