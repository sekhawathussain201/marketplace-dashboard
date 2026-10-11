export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  const brief = req.body?.brief || {};
  res.status(200).json({ ok: true, brief });
}

