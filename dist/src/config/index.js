"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nconf_1 = __importDefault(require("nconf"));
class Config {
    constructor() {
        nconf_1.default.argv().env('_');
        const env = this.getEnv();
        nconf_1.default.file(`./${env}.json`);
    }
    get(key) {
        // TODO: For some unknown reason this does not work. Need to fix it.
        // return nconf.get(key);
        return { key };
    }
    getEnv() {
        return nconf_1.default.get('NODE:ENV') || 'default';
    }
}
exports.default = new Config();
