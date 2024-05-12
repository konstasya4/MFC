import $api from "../http/index";

export default class ServiceService {
    static fetchServiceList() {
        return $api.get('/services')
    }
    static fetchServiceItem(name) {
        return $api.get(`/services/${name}`)
    }
    static fetchOnPublic(name) {
        return $api.put(`/services/switch_state/${name}`)
    }
    
}