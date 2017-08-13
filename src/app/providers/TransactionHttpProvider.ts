import {TransactionHttp} from "nem-library";

export function TransactionHttpProvider(): TransactionHttp {
  return new TransactionHttp({
    protocol: "https",
    domain:"pretestnet1.nem.ninja",
    port: 7891
  })
}
