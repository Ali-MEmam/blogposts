import { Post } from "../Models/PostsModel";

export const getAllPostsRequest = (): Promise<Response> => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const getSinglePostRequest = (id: Number): Promise<Response> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const editPostRequest = (post: Post): Promise<Response> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: "put",
    body: JSON.stringify(post),
  });
};

export const deletePostRequest = (id: Number): Promise<Response> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "delete",
  });
};
