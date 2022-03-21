import BaseApi from "./BaseAPI"

export interface UserData {
  name: string | boolean
  email: string | boolean
  password: string | boolean
}

export interface LoginData {
  email: string | boolean
  password: string | boolean
}

export default class AuthAPI extends BaseApi {
  async getUsers() {
    const users = await fetch(`${this.baseUrl}/users`)
    return this.handleOriginalResponse(users)
  }

  async getUser(id: string) {
    const users = await fetch(`${this.baseUrl}/users/${id}`)
    return this.handleOriginalResponse(users)
  }

  async signUp(data: UserData) {
    const res = await fetch(`${this.baseUrl}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return this.handleOriginalResponse(res)
  }
}
