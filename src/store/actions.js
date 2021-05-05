/* eslint-disable prettier/prettier */
const getPosts = (context) => {
    context.commit('getPosts')
};
const getUserPosts = (context) => {
    context.commit('getUserPosts')
};
const createPost = (context, post) => {
    context.commit('createPost', post)
};
const editPost = (context, post) => {
    context.commit('editPost', post)
};
const deletePost = (context, id) => {
    context.commit('deletePost', id)
};
const signUp = (context, data) => {
    context.commit('signUp', data)
};
const login = (context, data) => {
    context.commit('login', data)
};
const getComments = (context, postId) => {
    context.commit('getComments', postId)
};
const createComment = (context, comment) => {
    context.commit('createComment', comment)
};
const editComment = (context, comment) => {
    context.commit('editComment', comment)
};
const deleteComment = (context, comment) => {
    context.commit('deleteComment', comment)
};
const searchUsers = (context, searchText) => {
    context.commit('searchUsers', searchText)
};

export default {
    getPosts,
    getUserPosts,
    createPost,
    editPost,
    deletePost,
    signUp,
    login,
    getComments,
    createComment,
    editComment,
    deleteComment,
    searchUsers
};