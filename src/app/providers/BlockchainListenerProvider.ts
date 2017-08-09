import {BlockchainListener} from "nem-library";

// https://pretestnet1.nem.ninja:7891/node/extended-info
export function BlockchainListenerProvider(): BlockchainListener {
  return new BlockchainListener({
    domain: "pretestnet1.nem.ninja"
  });
}
