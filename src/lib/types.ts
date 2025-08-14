export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  image?: string;
  createdAt?: string | CreatedAtObject;
}

export interface CreatePostData {
  title: string;
  content: string;
  author: string;
}

export interface PostsListResponse {
  status: string;
  applications?: Post[];
  error?: string;
}

export interface PostDetailResponse {
  status: string;
  post?: Post;
  error?: string;
}

export interface CreatePostResponse {
  status: string;
  success?: boolean;
  error?: string;
}

interface CreatedAtObject {
  date: string;
  timezone_type: number;
  timezone: string;
}

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}
