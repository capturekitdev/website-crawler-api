#!/usr/bin/env bash
# Website Crawler API – cURL example
# Usage: CAPTUREKIT_API_KEY=your-key bash website_crawler.sh
set -euo pipefail

curl -sS --fail-with-body -G "https://api.capturekit.dev/v1/website/crawler" \
  -H "x-api-key: ${CAPTUREKIT_API_KEY}" \
  --data-urlencode query=https://github.com/seaweedfs/seaweedfs
