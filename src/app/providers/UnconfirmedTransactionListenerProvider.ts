import {UnconfirmedTransactionListener} from "nem-library";

// https://pretestnet1.nem.ninja:7891/node/extended-info
export function UnconfirmedTransactionListenerProvider(): UnconfirmedTransactionListener {
  return new UnconfirmedTransactionListener({
    domain: "pretestnet1.nem.ninja"
  });
}
