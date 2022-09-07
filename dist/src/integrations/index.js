"use strict";
// import config from '../config';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: remove this as this is a hack for the config.ts issue
const weSki_1 = __importDefault(require("./providers/weSki"));
exports.default = (providerName = 'weSki') => {
    // Original implementation
    // const providerInfo = config.get(`providers:${providerName}`);
    // if (!providerInfo) throw new Error('No provider was found');
    // return require(`./${providerName}`)(providerInfo);
    // TODO: the following is a hard coded version of the above. Need to fix and remove
    return (0, weSki_1.default)({
        i: 1,
        name: "WeSki",
        baseAPI: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default",
        roomSizeLimitationCompareGroupSize: 3
    });
};
