// import {postRequest} from "../index";
import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 300,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const talkWithGPT = async (data = {}) => {
    try {

        const response = await http({
            method:"POST",
            url:'/v1/chat',
            data,
        });

        console.log("chat的结果是:", response) // 打印请求的结果

        // 这里你可以对 response 进行其他的处理
        // ...

        return response
    } catch (error) {
        console.error("出错是", error) // 打印请求过程中出现的错误

        // 这里你可以对错误进行其他的处理，如显示错误信息等
        // ...

        throw error // 如果你希望错误能继续向上抛出则需要这一行，否则可以删除
    }
}
