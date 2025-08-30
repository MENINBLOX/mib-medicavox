import type { NextRequest } from 'next/server';
import {
  appId,
  credential,
  channelName,
  botName,
  pubBotUid,
  subBotUid,
  token,
} from '../config';

export async function POST(request: NextRequest) {
  const { language } = await request.json();

  const response = await fetch(
    `https://api.agora.io/api/speech-to-text/v1/projects/${appId}/join`,
    {
      method: 'POST',
      headers: {
        Authorization: credential,
      },
      body: JSON.stringify({
        maxIdleTime: 5,
        languages: [language],
        name: botName,
        rtcConfig: {
          channelName,
          pubBotUid,
          pubBotToken: token,
          subBotUid,
          subBotToken: token,
        },
      }),
    }
  );

  const data = await response.json();

  return Response.json(data);
}
