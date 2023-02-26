#!/bin/bash

set -e

npx senv encrypt .env.development >.env.development.encrypted
npx senv encrypt .env.production >.env.production.encrypted
npx senv encrypt .env.test >.env.test.encrypted