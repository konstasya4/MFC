import $api from "../http/index";

export default class UserService {
    static fetchEmployees() {
        return $api.get('/employees')
    }
    static fetchStudents() {
        return $api.get('/students')
    }
    static fetchCurrentUser() {
        return $api.get('/account/currentuser')
        //  .then (result=>{
        //     console.log(result)
        //     return result
        //  })
    }
    static fetchStudent(serviceNumber) {
        return $api.get(`students/${serviceNumber}`)
    }
    static fetchEmployee(post) {
        return $api.get(`employees/frompost?post=${post}`)
    }
}