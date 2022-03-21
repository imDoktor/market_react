export default class BaseApi {
  baseUrl: string
  constructor() {
    this.baseUrl = `http://localhost:3001`
  }
  handleOriginalResponse = (res: any) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`)
    }
    return res.json()
  }
}
