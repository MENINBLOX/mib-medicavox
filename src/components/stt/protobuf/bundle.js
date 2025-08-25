/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Agora: {
    nested: {
      SpeechToText: {
        options: {
          objc_class_prefix: "Stt",
          csharp_namespace: "AgoraSTTSample.Protobuf",
          java_package: "io.agora.rtc.speech2text",
          java_outer_classname: "AgoraSpeech2TextProtobuffer"
        },
        nested: {
          Text: {
            fields: {
              uid: {
                type: "int64",
                id: 4
              },
              time: {
                type: "int64",
                id: 6
              },
              words: {
                rule: "repeated",
                type: "Word",
                id: 10
              },
              durationMs: {
                type: "int32",
                id: 12
              },
              dataType: {
                type: "string",
                id: 13
              },
              trans: {
                rule: "repeated",
                type: "Translation",
                id: 14
              },
              culture: {
                type: "string",
                id: 15
              },
              textTs: {
                type: "int64",
                id: 16
              },
              originalTranscript: {
                type: "OriginalTranscript",
                id: 18
              }
            },
            reserved: [
              [
                1,
                3
              ],
              [
                5,
                5
              ],
              [
                7,
                9
              ],
              [
                11,
                11
              ],
              [
                17,
                17
              ]
            ]
          },
          Word: {
            fields: {
              text: {
                type: "string",
                id: 1
              },
              isFinal: {
                type: "bool",
                id: 4
              }
            },
            reserved: [
              [
                2,
                2
              ],
              [
                3,
                3
              ],
              [
                5,
                5
              ]
            ]
          },
          Translation: {
            fields: {
              isFinal: {
                type: "bool",
                id: 1
              },
              lang: {
                type: "string",
                id: 2
              },
              texts: {
                rule: "repeated",
                type: "string",
                id: 3
              }
            }
          },
          OriginalTranscript: {
            fields: {
              culture: {
                type: "string",
                id: 1
              },
              words: {
                rule: "repeated",
                type: "Word",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
