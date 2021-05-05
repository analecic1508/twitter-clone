/* eslint-disable prettier/prettier */
import axios from 'axios';

export default async function login(user) {
    var respone = await axios.get('http://localhost:3000/users?username=' + user.username + '&password=' + user.password);
    return respone.data;

}