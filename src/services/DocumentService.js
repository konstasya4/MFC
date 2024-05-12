import $api from "../http/index";

export default class UserService {
    static fetchFile(renamedFile, type) {
        return $api.post(`/file?type=${type}`, renamedFile
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // }
        )
    }
    static fetchService(serviceName, serviceDescription, selectedOption) {
        console.log( "dddd", serviceName, serviceDescription, selectedOption)
        return $api.post('/services', {
            "name":serviceName,
            "description":serviceDescription,
            "type":selectedOption
        })
    }
    
}