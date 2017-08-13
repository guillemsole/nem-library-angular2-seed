import {NodeHttp} from "nem-library";

export function NodeHttpProvider(): NodeHttp {
  return new NodeHttp({
    protocol: "https",
    domain:"pretestnet1.nem.ninja",
    port: 7891
  });
}
