import {BlockHttp} from "nem-library";

export function BlockHttpProvider(): BlockHttp {
  return new BlockHttp({
    protocol: "https",
    domain:"pretestnet1.nem.ninja",
    port: 7891
  });
}
