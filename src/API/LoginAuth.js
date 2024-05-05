import axios from "axios";
// axios.defaults.baseURL='http://localhost:8080/'
// axios.defaults.withCredentials=true
export default class LoginAuth {
    static async LogIn(name, pass){
        try {
            const response = await axios.post(`http://localhost:8080/api/account/login?userName=${name}&password=${pass}`, {withCredentials: true});
            console.log("отправка",`http://localhost:8080/api/account/login?userName=${name}&password=${pass}`)
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
    static async LogOut(){
        try {
            const response = await axios.post('http://localhost:8080/api/account/logout');
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
}