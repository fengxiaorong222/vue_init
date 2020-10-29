import axios from 'axios'
import config from '@/config'

const baseUrl=process.env.NODE_ENV==='development'?config.baseUrl.dev:config.baseUrl.pro

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config
    }

    interceptors(instance, url) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            //处理config

            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            //处理响应

            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    request(options){
        //创建实例对象
        const instance=axios.create()
        // options=Object.assign(this.getInsideConfig(),options)
        options={...this.getInsideConfig(),...options}
        this.interceptors(instance,options.url)
        console.log(options)
        return instance(options)
    }
}

const axiosObj=new HttpRequest(baseUrl)
export default axiosObj