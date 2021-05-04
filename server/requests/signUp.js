/* eslint-disable prettier/prettier */
import axios from 'axios';

export default async function signUp(user) {
    var respone = await axios.post('http://localhost:3000/users', user);
    return respone.data;
}