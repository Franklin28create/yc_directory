"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var author_1 = require("@/sanity/schemaTypes/author");
var startup_1 = require("@/sanity/schemaTypes/startup");
exports.schema = {
    types: [author_1.author, startup_1.startup],
};
