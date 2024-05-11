import $api from "../http/index";

export default class UserService {
    static fetchFile(formData, type) {
        return $api.post(`/file?type=${type}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        })
    }
    // static fetchService(formData) {
    //     return $api.post('/services', formData
    //         // headers: {
    //         //     'Content-Type': 'multipart/form-data', 
    //         // },
    //     )
    // }
    
}