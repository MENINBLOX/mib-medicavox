import type { NextRequest } from 'next/server';
import { appId, credential } from '../config';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const agentId = searchParams.get('agentId');

  if (!agentId) {
    return Response.json({ error: 'agentId is required' }, { status: 400 });
  }

  const response = await fetch(
    `https://api.agora.io/api/speech-to-text/v1/projects/${appId}/agents/${agentId}`,
    {
      headers: {
        Authorization: credential,
      },
    }
  );

  console.log('hmm', response.status, appId, agentId);

  const data = await response.json();

  return Response.json(data);
}
