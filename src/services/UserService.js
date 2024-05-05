import $api from "../http/index";

export default class UserService {
    static fetchEmployees(){
        return $api.get('/employees')
    }
    static fetchStudents(){
      return $api.get('/students')
  }
}