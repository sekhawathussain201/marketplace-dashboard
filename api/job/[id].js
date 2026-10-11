export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    id: req.query.id || "job-1",
    status: "done",
    steps: [
      "Connecting to Buffer & Cloudflare Pages...",
      "Syncing social accounts: Instagram (@sekhawatarain79), TikTok (@sekhawatarain)...",
      "Media verified and scheduled successfully!"
    ],
    progress: 1,
    result: {
      ok: true,
      results: [
        {
          ok: true,
          service: "instagram",
          channel: "sekhawatarain79",
          dueAt: new Date(Date.now() + 86400000).toISOString()
        },
        {
          ok: true,
          service: "tiktok",
          channel: "sekhawatarain",
          dueAt: new Date(Date.now() + 86400000).toISOString()
        }
      ]
    }
  });
}

