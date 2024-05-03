import axios from "axios";
export default class TeacherList {
    static async uploadPDF(pdfFile) {
        try {
            const formData = new FormData();
            formData.append('pdf', pdfFile);

            const response = await axios.post('http://localhost:8080/api/statements', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            console.log(response);
            return response.data;
        } catch (error) {
            console.error('Ошибка при загрузке PDF файла:', error);
            throw error;
        }
    }
    static async getTeacherAdmin (){
        try{
          const response=await axios.get('http://localhost:8000/teacherAdmin')
          return response.data;
        }
        catch (error) {
          console.error('Error fetching data:', error);
          throw error; // Перехватываем исключение и выбрасываем его дальше
        }
        }
}