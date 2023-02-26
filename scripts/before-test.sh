#!/bin/bash

# Run the mocked server in the background
npm run mock &

# Wait for a short time to allow the server to start running
server_url=$(grep -o '"aws_appsync_graphqlEndpoint": "[^"]*"' ./src/aws-exports.js | cut -d'"' -f4 | sed 's/\/graphql//')
until curl -sSf "$server_url" > /dev/null; do
  sleep 1
done
echo "Server started!"
