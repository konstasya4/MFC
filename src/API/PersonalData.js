import axios from "axios";
export default class PersonalData {
    static async getId(){
        try {
            const response = await axios.get('http://localhost:8000/users');
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
    static async update(updateData){
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