import { makeAutoObservable } from "mobx"

class ErrorStore {
  errorText = ""
  errorVisible = false
  constructor() {
    makeAutoObservable(this)
  }

  setErrorText(err: string) {
    this.errorText = err
    this.errorVisible = true
  }

  clearErrorText() {
    this.errorText = ""
    this.errorVisible = false
  }
}

export default new ErrorStore()
