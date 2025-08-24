import type { NextRequest } from 'next/server';
import {
  appId,
  credential,
  channelName,
  botName,
  pubBotUid,
  subBotUid,
} from '../config';

export async function POST(request: NextRequest) {
  const { language } = await request.json();

  const response = await fetch(
    `https://api.agora.io/api/speech-to-text/v1/projects/${appId}/join`,
    {
      method: 'POST',
      headers: {
        Authorization: credential,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        maxIdleTime: 5,
        languages: [language],
        name: botName,
        rtcConfig: {
          channelName,
          pubBotUid,
          subBotUid,
        },
      }),
    }
  );

  const data = await response.json();

  return Response.json(data);
}
