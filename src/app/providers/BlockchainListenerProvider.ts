import {BlockchainListener} from "nem-library";

export function BlockchainListenerProvider(): BlockchainListener {
    return new BlockchainListener({domain:"23.228.67.85"});
}