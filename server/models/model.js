/* eslint-disable prettier/prettier */
export function initializeUser() {
    return {
        id: 0,
        name: "",
        surname: "",
        gender: "",
        username: "",
        dateOfBirth: "",
        profileImage: "",
        status: "",
        password: ""
    };
}
export function initializeCommentForEdit(comment) {
    return {
        id: comment.id,
        post_id: comment.post_id,
        user: comment.user,
        comment: ""
    };
}
export function initializeCommentForCreate(user, post_id) {
    return {
        post_id: post_id,
        user: user,
        comment: ""
    };
}

export function initializePostForEdit(post) {
    return {
        id: post.id,
        user: post.user,
        tweet: "",
        likesCount: post.likesCount,
        commentsCount: post.commentsCount,
        comments: []
    };
}
export function initializePostForCreate(user) {
    return {
        user: user,
        tweet: "",
        likesCount: "",
        commentsCount: "",
        comments: []
    }
}