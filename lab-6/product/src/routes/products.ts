import Router from "express";
import Product from "../model/Product";

const router = Router();

// Add new Product
router.post("/", (req, res) => {
  const { id, title, price, description } = req.body;
  const newProduct = new Product(id, title, price, description);
  newProduct.save();
  res.send(`Product with id ${id} has been saved successfully!`);
});

// Find All Product
router.get("/", (req, res) => {
  const products = Product.fecthAll();
  res.json(products);
});

//Find Product By Id
router.get("/:id", (req, res) => {
  const product = Product.findById(Number(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send(`Product Not Found!`);
  }
});

//Update Product ByID
router.put("/:id", (req, res) => {
  const { title, price, description } = req.body;
  const product = Product.findById(Number(req.params.id));
  if (product) {
    product.title = title;
    product.price = price;
    product.description = description;
    product.update();
    res.send("Product Updated successfully!");
  } else {
    res.status(404).send("Product not found");
  }
});

// Delete Product By Id
router.delete("/:id", (req, res) => {
  Product.deleteById(Number(req.params.id));
  res.send("Product Deleted Successfully!");
});

export default router;
