export type ChatMessage = {
  id: string;
  speakerUid: string;
  text: string;
  status: 'speaking' | 'finalized';
  lastModifiedAt?: Date;
};
