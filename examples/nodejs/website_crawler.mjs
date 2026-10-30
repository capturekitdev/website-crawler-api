// Website Crawler API – Node.js example (Node 18+, ES module)
// Usage: CAPTUREKIT_API_KEY=your-key node website_crawler.mjs

const headers = { "x-api-key": process.env.CAPTUREKIT_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "query": "https://github.com/seaweedfs/seaweedfs",
});
const response = await fetch(`https://api.capturekit.dev/v1/website/crawler?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log((await response.text()).slice(0, 2000));
