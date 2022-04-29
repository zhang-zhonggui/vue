import request from '@/utils/request'


// 登录方法
export function login(data) {
    return request({
        url: 'emp/login',
        headers: {
            isToken: false
        },
        method: 'post',
        data: data
    })
}
