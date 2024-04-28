import axios from "axios";
export default class StatusData {
static async getAll() {
    try {
        const response = await axios.get('http://localhost:8000/status');
        console.log(response.data)
        return response.data; // Возвращаем только свойство data из ответа
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Перехватываем исключение и выбрасываем его дальше
    }
}
}