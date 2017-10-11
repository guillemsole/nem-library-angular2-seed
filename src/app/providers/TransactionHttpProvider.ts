import {TransactionHttp} from 'nem-library';

export function TransactionHttpProvider(): TransactionHttp {
  return new TransactionHttp();
}
