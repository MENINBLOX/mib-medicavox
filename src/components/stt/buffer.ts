import type { SttToken } from './model';

type Draft = {
  id: string;
  speakerUid: string;
  tokens: string[];
  idleTimer?: number;
};

export class SttDraftBuffer {
  private drafts = new Map<string, Draft>();
  private readonly idleMs: number;
  private onBufferUpdate?: (draft: Draft, isFinalized: boolean) => void;

  constructor(
    idleMs: number,
    handlers?: {
      onBufferUpdate?: (draft: Draft, isFinalized: boolean) => void;
    }
  ) {
    this.idleMs = idleMs;
    this.onBufferUpdate = handlers?.onBufferUpdate;
  }

  setHandlers(handlers: {
    onBufferUpdate?: (draft: Draft, isFinalized: boolean) => void;
  }) {
    this.onBufferUpdate = handlers.onBufferUpdate;
  }

  push(token: SttToken) {
    const draft = this.ensureDraft(token.speakerUid);
    draft.tokens.push(...token.tokens);
    this.onBufferUpdate?.({ ...draft }, false);
    this.resetTimer(draft);
  }

  finalizeAll() {
    for (const [speakerUid] of this.drafts) {
      this.finalize(speakerUid);
    }
  }

  private ensureDraft(speakerUid: string): Draft {
    const existingDraft = this.drafts.get(speakerUid);
    if (existingDraft) return existingDraft;

    const draft: Draft = { id: this.genId(), speakerUid, tokens: [] };
    this.drafts.set(speakerUid, draft);
    return draft;
  }

  private resetTimer(d: Draft) {
    if (d.idleTimer) window.clearTimeout(d.idleTimer);
    d.idleTimer = window.setTimeout(
      () => this.finalize(d.speakerUid),
      this.idleMs
    );
  }

  private finalize(speakerUid: string) {
    const draft = this.drafts.get(speakerUid);
    if (!draft) return;

    this.drafts.delete(speakerUid);
    this.onBufferUpdate?.({ ...draft }, true);
  }

  private genId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }
  normalize(tokens: string[]): string {
    return tokens.join(' ').trim();
  }
}
