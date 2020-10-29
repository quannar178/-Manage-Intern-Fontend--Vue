const request = require('../utils/request')

const login = (data) => {
    console.log(data);
    return request({
        url: '/api/auth/login',
        method: 'post',
        data
    })
}

const getInfo = () => {
    return request({
        url: '/api/auth/getinfo',
        method: 'post',

    })
}

module.exports = {
    login,
    getInfo
}