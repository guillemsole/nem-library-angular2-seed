import {NamespaceHttp} from "nem-library";

export function NamespaceHttpProvider(): NamespaceHttp {
  return new NamespaceHttp({
    protocol: "https",
    domain:"pretestnet1.nem.ninja",
    port: 7891
  })
}
