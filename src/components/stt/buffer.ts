import type { SttStreamChunk } from './model';

type Draft = {
  id: string;
  speakerUid: string;
  text: string;
  isUpdating: boolean;
};

type Buffer = {
  drafts: Draft[];
  idleTimer?: number;
};

export class SttDraftBufferManager {
  private bufferMap = new Map<string, Buffer>();
  private readonly idleMs: number;
  private onBufferUpdate?: (drafts: Draft[], isFinalized: boolean) => void;

  constructor(
    idleMs: number,
    handlers?: {
      onBufferUpdate?: (drafts: Draft[], isFinalized: boolean) => void;
    }
  ) {
    this.idleMs = idleMs;
    this.onBufferUpdate = handlers?.onBufferUpdate;
  }

  setHandlers(handlers: {
    onBufferUpdate?: (drafts: Draft[], isFinalized: boolean) => void;
  }) {
    this.onBufferUpdate = handlers.onBufferUpdate;
  }

  push(chunk: SttStreamChunk) {
    const draftList = this.ensureDraftList(chunk.speakerUid);
    const lastDraft = draftList[draftList.length - 1];

    if (lastDraft && lastDraft.isUpdating) {
      lastDraft.text = chunk.text;
      lastDraft.isUpdating = !chunk.isFinal;
    } else {
      const draft: Draft = {
        id: this.genId(),
        speakerUid: chunk.speakerUid,
        text: chunk.text,
        isUpdating: !chunk.isFinal,
      };
      draftList.push(draft);
    }

    this.onBufferUpdate?.([...draftList], false);
    this.resetTimer(chunk.speakerUid);
  }

  private ensureDraftList(speakerUid: string): Draft[] {
    const existingDraftList = this.bufferMap.get(speakerUid);
    if (existingDraftList) return existingDraftList.drafts;

    const buffer: { drafts: Draft[]; idleTimer?: number } = {
      drafts: [],
    };
    this.bufferMap.set(speakerUid, buffer);
    return buffer.drafts;
  }

  private resetTimer(speakerUid: string) {
    const draftList = this.bufferMap.get(speakerUid);
    if (!draftList) return;

    if (draftList.idleTimer) window.clearTimeout(draftList.idleTimer);
    draftList.idleTimer = window.setTimeout(
      () => this.finalize(speakerUid),
      this.idleMs
    );
  }

  private finalize(speakerUid: string) {
    const buffer = this.bufferMap.get(speakerUid);
    if (!buffer) return;

    const finalizedDrafts = buffer.drafts.filter((d) => !d.isUpdating);
    const remainingDrafts = buffer.drafts.filter((d) => d.isUpdating);

    if (finalizedDrafts.length > 0) {
      this.onBufferUpdate?.([...finalizedDrafts], true);
    }

    if (remainingDrafts.length === 0) {
      this.bufferMap.delete(speakerUid);
    } else {
      buffer.drafts = remainingDrafts;
    }
  }

  private genId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }
  normalize(tokens: string[]): string {
    return tokens.join(' ').trim();
  }
}
