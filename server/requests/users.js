
/* eslint-disable prettier/prettier */
import axios from 'axios';


export const apiSearchUsers = async (searchText) => {
    var respone = await axios.get('http://localhost:3000/users?name_like=' + searchText);
    return respone.data;
};