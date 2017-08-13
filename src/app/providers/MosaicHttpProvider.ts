import {MosaicHttp} from "nem-library";

export function MosaicHttpProvider(): MosaicHttp {
  return new MosaicHttp({
    protocol: "https",
    domain:"pretestnet1.nem.ninja",
    port: 7891
  });
}
