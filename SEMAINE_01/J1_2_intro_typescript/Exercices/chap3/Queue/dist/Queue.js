"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this._elems = [];
    }
    push(elem) {
        this._elems.push(elem);
    }
    pop() {
        return this._elems.pop();
    }
    get elems() {
        return this._elems;
    }
}
exports.default = Queue;
