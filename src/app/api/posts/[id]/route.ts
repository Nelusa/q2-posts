import { NextResponse } from 'next/server';
import https from 'https';
import { PostDetailResponse } from '@/lib/types';

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

function makeExternalRequest(path: string, postData: string): Promise<PostDetailResponse> {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'stage73.q2.cz',
      path: `/q2onboarding/q2${path}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
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

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await makeExternalRequest(
        `/posts/view/${id}`,
        JSON.stringify({ token: API_TOKEN })
    );

    if (response.status === 'OK' && response.post) {
      return NextResponse.json({ post: response.post });
    }

    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
