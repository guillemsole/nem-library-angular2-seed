import {AccountHttp} from "nem-library";

export function AccountHttpProvider(): AccountHttp {
    return new AccountHttp({domain:"23.228.67.85"});
}