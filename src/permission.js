const router = require('./router')
const store = require('./store')
const {getToken} = require('./utils/auth')


const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    // to and from are both route objects. must call `next`.
    const hasToken = getToken();
    if(hasToken){
        if(to.path === '/login'){
            next({path: '/'});
        }else{
            try {
                
            } catch (error) {
                
            }
        }
    }
})