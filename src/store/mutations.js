/* eslint-disable prettier/prettier */
import { apiGetAllPosts, apiGetAllUserPosts, apiDeletePost, apiCreatePost, apiEditPost } from '../../server/requests/posts';
import { apiGetPostsComments, apiCreateComment, apiEditComment, apiDeleteComment } from '../../server/requests/comments';
import apiLogin from "../../server/requests/login";
import apiSignUp from "../../server/requests/signUp";
import { apiSearchUsers } from "../../server/requests/users";
import router from '../router/router';
const setProfileUser = (state, user) => {
    state.profileUser = user;
};
const setErrorText = (state, text) => {
    state.errorMessages.push(text);
};
const removeAllErrorText = (state) => {
    state.errorMessages = [];
};
const logout = (state) => {
    state.currentUser = null;
    state.authenticated = false;
};
const login = async (state, data) => {
    var responseData = await apiLogin(data);
    if (!responseData.length)
        state.errorMessages.push('Login faild, you need to signup first');
    else {
        state.currentUser = responseData[0];
        state.authenticated = true;
        router.push('homePage');
    }
};
const signUp = async (state, data) => {
    var responseData = await apiSignUp(data);
    if (!responseData)
        state.errorMessages.push('Sommething went wrong!');
    else {
        state.currentUser = responseData;
        state.authenticated = true;
        router.push('homePage');
    }
};
const getPosts = async (state) => {
    state.posts = await apiGetAllPosts();
};
const createPost = async (state, post) => {
    var response = await apiCreatePost(post);
    if (!response)
        state.errorMessages.push('Sommething went wrong!');
    else
        state.posts.push(response);
};
const editPost = async (state, editPost) => {
    var response = await apiEditPost(editPost);
    if (!response)
        state.errorMessages.push('Sommething went wrong!');
    else {
        var post = state.posts.find(f => f.id == editPost.id);
        post.tweet = response.tweet;
    }
};
const deletePost = async (state, id) => {
    var response = await apiDeletePost(id);
    if (!response)
        state.errorMessages.push('Sommething went wrong!');
    else {
        var post = state.posts.find(f => f.id == id);
        state.posts.pop(post);
    }
};
const getComments = async (state, postId) => {
    var comments = await apiGetPostsComments(postId);
    var post = state.posts.find(f => f.id == postId);
    post.comments = comments;
};
const getUserPosts = async (state) => {
    state.posts = await apiGetAllUserPosts(state.profileUser.id);
};
const createComment = async (state, comment) => {
    var response = await apiCreateComment(comment);
    if (!response)
        state.errorMessage = 'Sommething went wrong!';
    else {
        var post = state.posts.find(f => f.id == comment.post_id);
        post.comments.push(response);
    }
};
const editComment = async (state, comment) => {
    var response = await apiEditComment(comment);
    if (!response)
        state.errorMessage = 'Sommething went wrong!';
    else {
        var post = state.posts.find(f => f.id == comment.post_id);
        var changedComment = post.comments.find(f => f.id == comment.id)
        changedComment.comment = response.comment;
    }
};
const deleteComment = async (state, comment) => {
    var response = await apiDeleteComment(comment);
    if (!response)
        state.errorMessage = 'Sommething went wrong!';
    else {
        var post = state.posts.find(f => f.id == comment.post_id);
        var changedComment = post.comments.find(f => f.id == comment.id)
        post.comments.pop(changedComment);
    }
};
const searchUsers = async (state, searchText) => {
    var response = await apiSearchUsers(searchText);
    if (!response)
        state.errorMessage = 'Sommething went wrong!';
    else
        state.users = response;
};


export default {
    setProfileUser,
    createComment,
    createPost,
    deleteComment,
    deletePost,
    editComment,
    editPost,
    getComments,
    getUserPosts,
    login,
    signUp,
    getPosts,
    removeAllErrorText,
    searchUsers,
    setErrorText,
    logout
};