import {UnconfirmedTransactionListener} from "nem-library";

export function UnconfirmedTransactionListenerProvider(): UnconfirmedTransactionListener {
    return new UnconfirmedTransactionListener({domain:"23.228.67.85"});
}