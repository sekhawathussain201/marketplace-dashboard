export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  const channels = [
    {
      id: "6acb15f6778b240e2fd2d1f5",
      service: "instagram",
      name: "sekhawatarain79",
      displayName: "sekhawatarain79"
    },
    {
      id: "6acb1827778b240e2fd2e96f",
      service: "tiktok",
      name: "sekhawatarain",
      displayName: "sekhawatarain"
    }
  ];

  res.status(200).json({ channels });
}

