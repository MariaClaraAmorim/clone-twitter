export interface Post {
  body: string;
  id?: string;
  title?: string;
  userId: string;
}

export interface Tweet {
  body: string;
  id?: string;
  userId: string;
  created_at: string;
}
