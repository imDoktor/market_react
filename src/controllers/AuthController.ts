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
      if (!user) {
        this.errorHandler("не верный email или пароль")
        return
      }
      if (user.password === data.password) {
        User.setUserData(user)
        localStorage.setItem("id", user.id)
      } else {
        this.errorHandler("не верный email или пароль")
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
      await this.api.signUp(data)
      const loginData = { email: data.email, password: data.password }
      this.login(loginData)
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
