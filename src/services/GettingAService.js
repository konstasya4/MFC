import $api from "../http/index";

export default class GettingAService {
    static fetchAddedService(name) {
        return $api.post(`/task/${name}`)
    }
    static fetchListServicesAdmin() {
        return $api.get(`/task`)
    }
    static fetchNewStatus(state, taskId) {
        return $api.put(`/task/${taskId}?newState=${state}`)
    }
    static fetchDownloadTheApplication(type, nameFile) {
        return $api.get(`/autodoc/${type}/${nameFile}`)
    }
    static fetchDownloadTheApplicationForAdmin(id) {
        return $api.get(`/autodoc/${id}`)
    }
}