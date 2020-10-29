const Authentication = 'token';

function setToken(token){
    return localStorage.setItem(Authentication, token);
}

function getToken(){
    return localStorage.getItem(Authentication)
}

function removeToken(){
    return localStorage.removeItem(Authentication);
}

module.exports = {
    setToken,
    getToken,
    removeToken
}