export const inputOptions = {
  email: {
    re: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    errorText: "Введите email",
  },
  password: {
    re: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
    errorText:
      "От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра",
  },
  name: {
    re: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
    errorText: "Латиница или Кирилица, первая буква Заглавная",
  },
}
