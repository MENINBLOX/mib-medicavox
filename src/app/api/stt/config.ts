export const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID ?? '';
export const channelName = process.env.NEXT_PUBLIC_TEMP_AGORA_CHANNEL ?? '';

const customerKey = process.env.AGORA_CUSTOMER_KEY ?? '';
const customerSecret = process.env.AGORA_CUSTOMER_SECRET ?? '';
const plainCredential = `${customerKey}:${customerSecret}`;
const base64Credential = Buffer.from(plainCredential).toString('base64');
export const credential = `Basic ${base64Credential}`;

export const pubBotUid = process.env.NEXT_PUBLIC_TEMP_AGORA_PUB_BOT_UID ?? '';
export const subBotUid = '88223';
export const botName = 'stt-bot-id';
