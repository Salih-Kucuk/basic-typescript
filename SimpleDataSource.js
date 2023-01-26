"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "Ps2", "Console", 2000), new product_1.Product(2, "Ps3", "Console", 4000), new product_1.Product(3, "Ps4", "Console", 11000), new product_1.Product(4, "Ps5", "Console", 20000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
