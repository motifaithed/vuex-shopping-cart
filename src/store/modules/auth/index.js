import mutations from './mutations';
import actions from './actions';
import getters  from './getters';
const authModule = {
    state(){
        return {
            isLoggedIn: false,
        }
    },
    mutations:mutations,
    actions:actions,
    getters: getters
}

export default authModule;