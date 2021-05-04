/* eslint-disable prettier/prettier */
import axios from 'axios';


export const apiGetPostsComments = async (postID) => {
    var respone = await axios.get('http://localhost:3000/comments?post_id=' + postID);
    return respone.data;
};

export const apiCreateComment = async (comment) => {
    var respone = await axios.post('http://localhost:3000/comments', comment);
    return respone.data;
};

export const apiEditComment = async (comment) => {
    var respone = await axios.put('http://localhost:3000/comments/' + comment.id, comment);
    return respone.data;
};
export const apiDeleteComment = async (comment) => {
    var respone = await axios.delete('http://localhost:3000/comments/' + comment.id);
    return respone.data;
};
