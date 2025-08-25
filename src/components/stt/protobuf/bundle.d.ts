import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Agora. */
export namespace Agora {

    /** Namespace SpeechToText. */
    namespace SpeechToText {

        /** Properties of a Text. */
        interface IText {

            /** Text uid */
            uid?: (number|Long|null);

            /** Text time */
            time?: (number|Long|null);

            /** Text words */
            words?: (Agora.SpeechToText.IWord[]|null);

            /** Text durationMs */
            durationMs?: (number|null);

            /** Text dataType */
            dataType?: (string|null);

            /** Text trans */
            trans?: (Agora.SpeechToText.ITranslation[]|null);

            /** Text culture */
            culture?: (string|null);

            /** Text textTs */
            textTs?: (number|Long|null);

            /** Text originalTranscript */
            originalTranscript?: (Agora.SpeechToText.IOriginalTranscript|null);
        }

        /** Represents a Text. */
        class Text implements IText {

            /**
             * Constructs a new Text.
             * @param [properties] Properties to set
             */
            constructor(properties?: Agora.SpeechToText.IText);

            /** Text uid. */
            public uid: (number|Long);

            /** Text time. */
            public time: (number|Long);

            /** Text words. */
            public words: Agora.SpeechToText.IWord[];

            /** Text durationMs. */
            public durationMs: number;

            /** Text dataType. */
            public dataType: string;

            /** Text trans. */
            public trans: Agora.SpeechToText.ITranslation[];

            /** Text culture. */
            public culture: string;

            /** Text textTs. */
            public textTs: (number|Long);

            /** Text originalTranscript. */
            public originalTranscript?: (Agora.SpeechToText.IOriginalTranscript|null);

            /**
             * Creates a new Text instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Text instance
             */
            public static create(properties?: Agora.SpeechToText.IText): Agora.SpeechToText.Text;

            /**
             * Encodes the specified Text message. Does not implicitly {@link Agora.SpeechToText.Text.verify|verify} messages.
             * @param message Text message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Agora.SpeechToText.IText, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Text message, length delimited. Does not implicitly {@link Agora.SpeechToText.Text.verify|verify} messages.
             * @param message Text message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Agora.SpeechToText.IText, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Text message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Text
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Agora.SpeechToText.Text;

            /**
             * Decodes a Text message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Text
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Agora.SpeechToText.Text;

            /**
             * Verifies a Text message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Text message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Text
             */
            public static fromObject(object: { [k: string]: any }): Agora.SpeechToText.Text;

            /**
             * Creates a plain object from a Text message. Also converts values to other types if specified.
             * @param message Text
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Agora.SpeechToText.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Text to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Text
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Word. */
        interface IWord {

            /** Word text */
            text?: (string|null);

            /** Word isFinal */
            isFinal?: (boolean|null);
        }

        /** Represents a Word. */
        class Word implements IWord {

            /**
             * Constructs a new Word.
             * @param [properties] Properties to set
             */
            constructor(properties?: Agora.SpeechToText.IWord);

            /** Word text. */
            public text: string;

            /** Word isFinal. */
            public isFinal: boolean;

            /**
             * Creates a new Word instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Word instance
             */
            public static create(properties?: Agora.SpeechToText.IWord): Agora.SpeechToText.Word;

            /**
             * Encodes the specified Word message. Does not implicitly {@link Agora.SpeechToText.Word.verify|verify} messages.
             * @param message Word message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Agora.SpeechToText.IWord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Word message, length delimited. Does not implicitly {@link Agora.SpeechToText.Word.verify|verify} messages.
             * @param message Word message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Agora.SpeechToText.IWord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Word message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Word
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Agora.SpeechToText.Word;

            /**
             * Decodes a Word message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Word
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Agora.SpeechToText.Word;

            /**
             * Verifies a Word message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Word message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Word
             */
            public static fromObject(object: { [k: string]: any }): Agora.SpeechToText.Word;

            /**
             * Creates a plain object from a Word message. Also converts values to other types if specified.
             * @param message Word
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Agora.SpeechToText.Word, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Word to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Word
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Translation. */
        interface ITranslation {

            /** Translation isFinal */
            isFinal?: (boolean|null);

            /** Translation lang */
            lang?: (string|null);

            /** Translation texts */
            texts?: (string[]|null);
        }

        /** Represents a Translation. */
        class Translation implements ITranslation {

            /**
             * Constructs a new Translation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Agora.SpeechToText.ITranslation);

            /** Translation isFinal. */
            public isFinal: boolean;

            /** Translation lang. */
            public lang: string;

            /** Translation texts. */
            public texts: string[];

            /**
             * Creates a new Translation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Translation instance
             */
            public static create(properties?: Agora.SpeechToText.ITranslation): Agora.SpeechToText.Translation;

            /**
             * Encodes the specified Translation message. Does not implicitly {@link Agora.SpeechToText.Translation.verify|verify} messages.
             * @param message Translation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Agora.SpeechToText.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Translation message, length delimited. Does not implicitly {@link Agora.SpeechToText.Translation.verify|verify} messages.
             * @param message Translation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Agora.SpeechToText.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Translation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Translation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Agora.SpeechToText.Translation;

            /**
             * Decodes a Translation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Translation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Agora.SpeechToText.Translation;

            /**
             * Verifies a Translation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Translation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Translation
             */
            public static fromObject(object: { [k: string]: any }): Agora.SpeechToText.Translation;

            /**
             * Creates a plain object from a Translation message. Also converts values to other types if specified.
             * @param message Translation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Agora.SpeechToText.Translation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Translation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Translation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OriginalTranscript. */
        interface IOriginalTranscript {

            /** OriginalTranscript culture */
            culture?: (string|null);

            /** OriginalTranscript words */
            words?: (Agora.SpeechToText.IWord[]|null);
        }

        /** Represents an OriginalTranscript. */
        class OriginalTranscript implements IOriginalTranscript {

            /**
             * Constructs a new OriginalTranscript.
             * @param [properties] Properties to set
             */
            constructor(properties?: Agora.SpeechToText.IOriginalTranscript);

            /** OriginalTranscript culture. */
            public culture: string;

            /** OriginalTranscript words. */
            public words: Agora.SpeechToText.IWord[];

            /**
             * Creates a new OriginalTranscript instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OriginalTranscript instance
             */
            public static create(properties?: Agora.SpeechToText.IOriginalTranscript): Agora.SpeechToText.OriginalTranscript;

            /**
             * Encodes the specified OriginalTranscript message. Does not implicitly {@link Agora.SpeechToText.OriginalTranscript.verify|verify} messages.
             * @param message OriginalTranscript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Agora.SpeechToText.IOriginalTranscript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OriginalTranscript message, length delimited. Does not implicitly {@link Agora.SpeechToText.OriginalTranscript.verify|verify} messages.
             * @param message OriginalTranscript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Agora.SpeechToText.IOriginalTranscript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OriginalTranscript message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OriginalTranscript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Agora.SpeechToText.OriginalTranscript;

            /**
             * Decodes an OriginalTranscript message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OriginalTranscript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Agora.SpeechToText.OriginalTranscript;

            /**
             * Verifies an OriginalTranscript message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OriginalTranscript message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OriginalTranscript
             */
            public static fromObject(object: { [k: string]: any }): Agora.SpeechToText.OriginalTranscript;

            /**
             * Creates a plain object from an OriginalTranscript message. Also converts values to other types if specified.
             * @param message OriginalTranscript
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Agora.SpeechToText.OriginalTranscript, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OriginalTranscript to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OriginalTranscript
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
