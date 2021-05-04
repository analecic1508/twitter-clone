/* eslint-disable prettier/prettier */
import axios from 'axios';


export const apiGetAllPosts = async () => {
    var respone = await axios.get('http://localhost:3000/posts');
    return respone.data;
};
export const apiGetAllUserPosts = async (userId) => {
    var respone = await axios.get('http://localhost:3000/posts?user.id=' + userId);
    return respone.data;
};
export const apiCreatePost = async (post) => {
    var respone = await axios.post('http://localhost:3000/posts', post);
    return respone.data;
};

export const apiEditPost = async (post) => {
    var respone = await axios.put('http://localhost:3000/posts/' + post.id, post);
    return respone.data;
};
export const apiDeletePost = async (id) => {
    var respone = await axios.delete('http://localhost:3000/posts/' + id);
    return respone.data;
};
