import { Product } from "./product";
import { ProductServices } from "./ProductServices";

let _productServices = new ProductServices();
let result;

result = _productServices.getProducts();
result = _productServices.getById(3);

let p = new Product ();
p.name = "Ps";
p.price = 1000;
p.category = "Console";

_productServices.saveProducts(p);
//result = _productServices.getProducts();
_productServices.deleteProducts(result);
result = _productServices.getProducts();

console.log(result);