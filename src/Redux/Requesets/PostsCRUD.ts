import { Post } from "../Models/PostsModel";

export const getAllPostsRequest = (): Promise<Response> => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const getSinglePostRequest = (id: Number): Promise<Response> => {
  console.log(id);
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const editPostRequest = (post: Post): Promise<Response> => {
  console.log(post.id);
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const deletePostRequest = (id: Number): Promise<Response> => {
  console.log(id);
  return fetch("https://jsonplaceholder.typicode.com/posts");
};
