import axios from "axios";
export default class LoginAuth {
    static async LogIn(name, pass){
        try {
            const response = await axios.post(`http://localhost:8080/api/account/login?userName=${name}&password=${pass}`);
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
    static async LogOut(updateData){
        try {
            const response = await axios.put('http://localhost:8000/users', {mail:updateData})
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
}