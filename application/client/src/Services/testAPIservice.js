import http from '../http-common';

class testAPIservice {
    getAllUsers() {
        return http.get('/login');
    }

    saveUser(user){
        return http.post('login/save', user);
    }
}

export default new testAPIservice();