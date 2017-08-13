import {AccountListener} from "nem-library";

export function AccountListenerProvider(): AccountListener {
  return new AccountListener({
    protocol: "https",
    domain: "pretestnet1.nem.ninja",
    port: 7779
  });
}
