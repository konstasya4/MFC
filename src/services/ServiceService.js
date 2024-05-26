import $api from "../http/index";

export default class ServiceService {
    static fetchServiceList() {
        return $api.get('/services')
    }
    static fetchServiceItem(name) {
        const a= $api.get(`/services/${name}`)
        console.log(a)
        return a
    }
    static fetchOnPublic(name) {
        return $api.put(`/services/switch_state/${name}`)
    }
    static fetchExecutionServicesUser(){
        return $api.get('/task/from_current_user')
    }
    static fetchDeleteService (serviceName){
      return $api.delete(`/services/${serviceName}`);
    }
}