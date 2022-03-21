import AuthAPI, { LoginData, UserData } from "../api/AuthAPI"
import User from "../store/user"
import ErrorStore from "../store/error"

class AuthController {
  private api: AuthAPI

  constructor() {
    this.api = new AuthAPI()
  }

  errorHandler(err: any) {
    ErrorStore.setErrorText(err)
    setTimeout(() => {
      ErrorStore.clearErrorText()
    }, 2000)
  }

  async login(data: LoginData) {
    try {
      const users = await this.api.getUsers()
      const user = users.find((user: UserData) => user.email === data.email)
      if (user.password === data.password) {
        User.setUserData(user)
        localStorage.setItem("id", user.id)
      }
    } catch (err) {
      this.errorHandler(err)
    }
  }

  async getUser(id: any) {
    try {
      const user = await this.api.getUser(id)
      User.setUserData(user)
      return true
    } catch (err) {
      this.errorHandler(err)
    }
  }

  async signUp(data: UserData) {
    try {
      const resp = await this.api.signUp(data)
      if (resp) {
        const loginData = { email: data.email, password: data.password }
        this.login(loginData)
      }
    } catch (err) {
      this.errorHandler(err)
    }
  }

  async signOut() {
    localStorage.removeItem("id")
    User.deleteUserData()
  }
}

export default new AuthController()
