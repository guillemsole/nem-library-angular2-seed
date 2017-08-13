import {ConfirmedTransactionListener} from "nem-library";

export function ConfirmedTransactionListenerProvider(): ConfirmedTransactionListener {
  return new ConfirmedTransactionListener({
    protocol: "https",
    domain: "pretestnet1.nem.ninja",
    port: 7779
  })
}
