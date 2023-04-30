import axios from 'axios';
import getConfig from 'next/config';

let { publicRuntimeConfig } = getConfig();
let apiClient = axios.create({
    baseURL: publicRuntimeConfig.apiUrl,
    timeout: 5000
})

export default apiClient 