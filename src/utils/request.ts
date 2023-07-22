import axios from 'axios';

const request = axios.create({
    timeout: 5000,
});

// 添加响应拦截器
request.interceptors.response.use(
    response => response.data, // 只返回 response.data
    error => {
        // 处理请求错误
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

export default request;
