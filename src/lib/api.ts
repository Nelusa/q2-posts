import {ApiError, CreatePostData, Post} from "@/lib/types";

const BASE_URL = '/api';

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
