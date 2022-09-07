"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sites_1 = __importDefault(require("../../fixtures/sites"));
const router = (0, express_1.Router)();
const getMetadata = () => ({
    sites: sites_1.default,
    groupSizes: Array.from({ length: 10 }).map((_, i) => ({
        value: i + 1,
        label: `${i + 1} People`,
    }))
});
router.get('/', (req, res) => {
    try {
        const response = getMetadata();
        res.send(response);
    }
    catch (err) {
        res.status(500).send('Internal server error');
    }
});
exports.default = router;
