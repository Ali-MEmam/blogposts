export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export interface IPostReducerState {
  posts: Post[];
  viewedPost?: Post;
}
