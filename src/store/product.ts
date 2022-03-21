import { makeAutoObservable, action } from "mobx"

interface ProductData {
  id: string
  date: string
  model: string
  photo: string
  price: string
  description: string
  color: string
}

class ProductsStore {
  products: Array<ProductData> = []
  constructor() {
    makeAutoObservable(this)
  }

  setProducts(data: []) {
    this.products = data
  }

  setProduct(data: ProductData) {
    this.products.map((product) => {
      if (product.id === data.id) {
        product = data
        return product
      } else {
        return product
      }
    })
  }
}

export default new ProductsStore()
