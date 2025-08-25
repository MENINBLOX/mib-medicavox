# Add the executable file path of protobufjs-cli to the PATH environment variable
# Replace {absolute path of protobufjs-cli in your node_modules}/bin with the absolute path of protobufjs-cli in node_modules
export "PATH=$PATH:{absolute path of protobufjs-cli in your node_modules}/bin"

# Generate JavaScript example code
pbjs -t json-module -w es6 -o SttMessage_es6.js ./SttMessage.proto

echo "JavaScript code generation completed."



pbjs -t json-module -w commonjs -o bundle.js ./SttMessage.proto
pbjs -t static-module ./SttMessage.proto | pbts -o bundle.d.ts -


npx pbjs -t json-module -w commonjs -o bundle.js ./SttMessage.proto
npx pbjs -t static-module ./SttMessage.proto | pbts -o bundle.d.ts -