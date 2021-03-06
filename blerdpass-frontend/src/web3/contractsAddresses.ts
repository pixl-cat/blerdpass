import {Networks} from "./blockchain";

const LOCALHOST = {
    BLERD_PASS: "0x62f7a27875138228F08e78f85B521f0364af9D4a",
}

const ETH_TESTNET = {
    BLERD_PASS: "0x62f7a27875138228F08e78f85B521f0364af9D4a",
}

const MAINNET = {
    BLERD_PASS: "0x1dAA11cFD5CEBB1c250e8620e166A85f887A8B65",
}


export const getAddresses = (networkID: number) => {
    if (networkID === Networks.LOCALHOST) return LOCALHOST;
    if (networkID === Networks.MAINNET) return MAINNET;
    if (networkID === Networks.ETH_TESTNET) return ETH_TESTNET;

    throw Error("Network don't support");
};
