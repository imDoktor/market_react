import { makeAutoObservable } from "mobx"

interface UserData {
  email?: string | null
  name?: string | null
  password?: string | null
}

class UserStore {
  userData: UserData = {
    email: null,
    name: null,
    password: null,
  }
  constructor() {
    makeAutoObservable(this)
  }

  setUserData(data: {}) {
    this.userData = data
  }

  deleteUserData() {
    this.userData = {
      email: null,
      name: null,
      password: null,
    }
  }
}

export default new UserStore()
