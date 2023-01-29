#!/bin/bash

set -e

npx senv decrypt .env.development.encrypted >.env.development
npx senv decrypt .env.production.encrypted >.env.production
npx senv decrypt .env.test.encrypted >.env.test