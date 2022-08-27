export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IReduxStatePosts {
  posts: Post[];
  isLoading: boolean;
  viewedPost?: Post;
  error?: String;
}
