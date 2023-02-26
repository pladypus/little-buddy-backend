#!/bin/bash

# Get the process IDs of the mocked server
amplify_pids=$(ps -ef | grep -w 'amplify mock' | grep -v grep | awk '{print $2}' )

# Interrupt the mocked server
kill $amplify_pids

# Wait for the mocked server to exit
wait

rm -r ./amplify/mock-data/dynamodb
wait