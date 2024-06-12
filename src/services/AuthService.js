import $api from "../http/index";
export default class AuthService {
  static async login(userName, password) {
    return $api.post(`account/login?userName=${userName}&password=${password}`);
  }
  static async logout() {
    return $api.post("account/logout");
  }
}
