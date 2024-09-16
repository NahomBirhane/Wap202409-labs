let products: Product[] = [];
class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string
  ) {}

  save() {
    products.push(this);
  }
  update() {
    const index = products.findIndex((p) => p.id === this.id);
    if (index !== -1) {
      products[index] = this;
    }
  }

  static fecthAll() {
    return products;
  }

  static findById(productId: number) {
    return products.find((p) => p.id === productId);
  }

  static deleteById(productId: number) {
    products = products.filter((p) => p.id !== productId);
  }
}
export default Product;
