export interface State {
  posts: Post[],
  singlePost: Post
}

export interface Post {
  title: string,
  url: string,
  author: string,
  created_at: string,
  objectID: string
}

export interface PostAction {
  type: string,
  payload: Post
}

export interface PostListAction {
  type: string,
  payload: Post[]
}

export interface PostStore {
  postStore: {
    posts: Post[]
  }
}