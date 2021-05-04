/* eslint-disable prettier/prettier */
import axios from 'axios';

export default async function login(user) {
    debugger;
    var respone = await axios.get('http://localhost:3000/users?username=' + user.username + '&password=' + user.password);
    debugger;
    return respone.data;

}