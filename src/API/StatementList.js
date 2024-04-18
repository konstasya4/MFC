// import axios from "axios";

// export default class StatementList{
//     static async getAll(){
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

//         return response.data
//     }
// }
import axios from "axios";

export default class StatementList {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
    static async getById(id) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
            console.log(response.data)
            return response.data; // Возвращаем только свойство data из ответа
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
}
