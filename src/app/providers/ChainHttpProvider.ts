import {ChainHttp} from "nem-library";

export function ChainHttpProvider(): ChainHttp {
  return new ChainHttp({
    protocol: "https",
    domain:"pretestnet1.nem.ninja",
    port: 7891
  });
}
