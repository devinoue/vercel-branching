#!/bin/bash

# コミットされたブランチ名
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

# コミットしたユーザーのログインID(devinoue)
echo "VERCEL_GIT_COMMIT_AUTHOR_LOGIN: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"

# コミットしたユーザー名(DEV Inoue)
echo "VERCEL_GIT_COMMIT_AUTHOR_NAME: $VERCEL_GIT_COMMIT_AUTHOR_NAME"


if [[ "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "main" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi