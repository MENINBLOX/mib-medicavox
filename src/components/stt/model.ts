export type SttStreamChunk = {
  speakerUid: string;
  text: string;
  isFinal: boolean;
  receivedAt: Date;
};
