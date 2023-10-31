import axios from "axios";

//97015140/json/

const api = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
});

export default api