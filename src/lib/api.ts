const BASE_URL = '/api';

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  image?: string;
  createdAt?: string;
}

export interface CreatePostData {
  title: string;
  content: string;
  author: string;
}

class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

async function makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
  }

  return response.json();
}

export async function getPosts(): Promise<Post[]> {
  const response = await makeRequest<{ posts: Post[] }>('/posts');
  return response.posts;
}

export async function getPost(id: number): Promise<Post> {
  const response = await makeRequest<{ post: Post }>(`/posts/${id}`);
  return response.post;
}

export async function createPost(data: CreatePostData): Promise<{ success: boolean }> {
  await makeRequest('/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return { success: true };
}
