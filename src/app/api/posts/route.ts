import { NextRequest, NextResponse } from 'next/server';
import https from 'https';
import { PostsListResponse, CreatePostResponse } from '@/lib/types';

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

function makeExternalRequest(path: string, method: 'GET' | 'POST', postData: string): Promise<PostsListResponse | CreatePostResponse> {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'stage73.q2.cz',
      path: `/q2onboarding/q2${path}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          if (res.statusCode !== 200 && res.statusCode !== 201) {
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

export async function GET() {
  try {
    const response = await makeExternalRequest(
        '/posts/list',
        'GET',
        JSON.stringify({ token: API_TOKEN })
    ) as PostsListResponse;

    if (response.status === 'OK' && response.applications) {
      return NextResponse.json({ posts: response.applications });
    }

    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content, author } = await request.json();

    const response = await makeExternalRequest(
        '/posts/create',
        'POST',
        JSON.stringify({ token: API_TOKEN, title, content, author })
    ) as CreatePostResponse;

    if (response.status === 'CREATED' || response.status === 'OK') {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
