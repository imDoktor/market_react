import BaseApi from "./BaseAPI"

export interface ProductData {
  id: string
  date: string
  model: string
  photo: string
  price: string
  description: string
  color: string
}

export default class AuthAPI extends BaseApi {
  async getProducts() {
    const products = await fetch(`${this.baseUrl}/products`)
    return this.handleOriginalResponse(products)
  }

  async changeProduct(data: ProductData) {
    const res = await fetch(`${this.baseUrl}/products/${data.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return this.handleOriginalResponse(res)
  }
}
