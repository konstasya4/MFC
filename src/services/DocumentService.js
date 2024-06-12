import $api from "../http/index";

export default class DocumentService {
  static fetchFile(renamedFile, type) {
    return $api.post(`/file?type=${type}`, renamedFile, {});
  }
  static fetchServiceWithFile(formData) {
    return $api.post("/services/with_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static fetchService(formData) {
    return $api.post("/services", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static putService(
    newServiceName,
    serviceName,
    serviceDescription,
    selectedOption
  ) {
    return $api.put(
      "/services",
      {
        NewName: newServiceName,
        Name: serviceName,
        Description: serviceDescription,
        Type: selectedOption,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
}
