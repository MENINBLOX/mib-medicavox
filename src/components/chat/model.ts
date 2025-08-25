export type ChatMessage = {
  id: string;
  speakerUid: string;
  message: string;
  status: 'speaking' | 'finalized';
  lastModifiedAt?: Date;
};
