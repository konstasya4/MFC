import axios from "axios";

export default class StudentList {
    static async getPDF() {
        try {
            const response = await axios.get('http://localhost:8080/api/statements', {
                responseType:'blob' // указываем тип ответа как blob
            });
            console.log(response);
            return response.data; // возвращаем данные в формате blob
        } catch (error) {
            console.error('Ошибка при загрузке PDF файла:', error);
            throw error; // Перехватываем исключение и выбрасываем его дальше
        }
    }
}
// const PDFDownloader = () => {
//     const [loading, setLoading] = React.useState(false);
//     const [error, setError] = React.useState(null);
  
//     const downloadPDF = () => {
//       setLoading(true);
//       axios({
//         url: 'http://example.com/path/to/your/pdf.pdf', // замените URL на адрес вашего PDF файла
//         method: 'GET',
//         responseType: 'blob', // важно указать responseType как 'blob'
//       })
//       .then((response) => {
//         setLoading(false);
//         handleDownload(response.data);
//       })
//       .catch((error) => {
//         console.error('Ошибка при загрузке файла:', error);
//         setError('Ошибка при загрузке файла');
//         setLoading(false);
//       });
//     };
  
//     const handleDownload = (pdfData) => {
//       const url = window.URL.createObjectURL(new Blob([pdfData]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'file.pdf'); // задайте имя файла для загрузки
//       document.body.appendChild(link);
//       link.click();
//     };
  
//     return (
//       <div>
//         <PDFDownloaderButton onDownload={downloadPDF} />
//         {loading && <div>Загрузка...</div>}
//         {error && <div>{error}</div>}
//       </div>
//     );
//   };
  