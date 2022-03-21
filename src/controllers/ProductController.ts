import ProductsAPI, { ProductData } from "../api/ProductsAPI"
import ProductsStore from "../store/product"
import ErrorStore from "../store/error"

class ProductsController {
  private api: ProductsAPI

  constructor() {
    this.api = new ProductsAPI()
  }

  errorHandler(err: any) {
    ErrorStore.setErrorText(err)
    setTimeout(() => {
      ErrorStore.clearErrorText()
    }, 2000)
  }

  async getProducts() {
    try {
      const products = await this.api.getProducts()
      ProductsStore.setProducts(products)
      return true
    } catch (err) {
      this.errorHandler(err)
    }
  }

  async changeProduct(data: ProductData) {
    try {
      const product = await this.api.changeProduct(data)
      ProductsStore.setProduct(product)
    } catch (err: any) {
      this.errorHandler(err)
    }
  }
}

export default new ProductsController()
