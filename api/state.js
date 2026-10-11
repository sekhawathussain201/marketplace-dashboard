export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  const state = {
    connected: {
      buffer: true,
      cloudflare: true,
      accountId: "556cc0e647a70d6d5bd6f524d1c69388",
      pagesProject: "zaiqa-royal-grill",
      pagesHost: "zaiqa-royal-grill.pages.dev"
    },
    channels: [
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
    ],
    channelError: null,
    projects: [
      {
        slug: "zaiqa-royal-grill",
        name: "Zaiqa Royal Grill",
        oneLine: "Karachi's authentic dum pukht biryani, charcoal BBQ & express kitchen.",
        forWho: "Foodies, families and biryani lovers in Karachi",
        hook: "Taste the true royal charcoal fire.",
        features: [
          "Dum Pukht Royal Biryani with saffron aroma",
          "Tender Chicken Malai Boti & Seekh Kebabs",
          "Peshawari Shinwari Karahi cooked in desi makhan",
          "Express 30-min delivery & live order tracking"
        ],
        handle: "@zaiqaroyalgrill",
        website: "https://restaurant-website-alpha-azure.vercel.app",
        shots: [
          "shot-1.png",
          "shot-2.png",
          "shot-3.png",
          "shot-4.png",
          "shot-5.png",
          "shot-6.png"
        ],
        phones: [
          "phone-1.png",
          "phone-2.png",
          "phone-3.png",
          "phone-4.png",
          "phone-5.png",
          "phone-6.png"
        ],
        readAt: "2026-10-11T05:22:00.000Z"
      }
    ],
    library: [
      {
        slug: "zaiqa-royal-grill",
        file: "launch-card-video.mp4",
        kind: "video",
        format: "story",
        title: "Zaiqa Royal Grill Grand Launch Reel",
        caption: "🔥 Grand Launch of Zaiqa Royal Grill in Karachi! Experience authentic Dum Pukht Royal Biryani, juicy Charcoal BBQ sizzlers & Peshawari Karahi. Express 30-min delivery & live tracking. Order online now! #ZaiqaRoyalGrill #KarachiFood #BiryaniLovers #BBQ #FoodiesOfKarachi",
        seconds: 12,
        madeAt: new Date().toISOString()
      },
      {
        slug: "zaiqa-royal-grill",
        file: "short-story-20261011-055412.mp4",
        kind: "video",
        format: "story",
        title: "Zaiqa Royal Grill Reel Story",
        caption: "Taste the true royal charcoal fire at Zaiqa Royal Grill! Karachi's authentic dum pukht biryani & live BBQ sizzlers. Order online & track live! #ZaiqaRoyalGrill #KarachiFood #Biryani",
        seconds: 15,
        madeAt: "2026-10-11T05:54:12.000Z"
      },
      {
        slug: "zaiqa-royal-grill",
        file: "short-square-20261011-065939.mp4",
        kind: "video",
        format: "square",
        title: "Zaiqa Royal Grill Square Promo",
        caption: "Authentic Dum Pukht Biryani & BBQ Sizzlers. Freshly served in Karachi! #Foodies #KarachiEats",
        seconds: 15,
        madeAt: "2026-10-11T06:59:39.000Z"
      },
      {
        slug: "zaiqa-royal-grill",
        file: "long-wide-20261011-064723.mp4",
        kind: "video",
        format: "wide",
        title: "Zaiqa Royal Grill Menu Tour",
        caption: "Explore our signature dishes from Peshawari Shinwari Karahi to Dum Pukht Biryani.",
        seconds: 30,
        madeAt: "2026-10-11T06:47:23.000Z"
      },
      {
        slug: "zaiqa-royal-grill",
        file: "launch-square-20261011-052930.jpg",
        kind: "image",
        format: "square",
        title: "Grand Launch Graphic",
        caption: "Zaiqa Royal Grill is now live in Karachi! Order your favorite royal biryani now.",
        madeAt: "2026-10-11T05:29:30.000Z"
      },
      {
        slug: "zaiqa-royal-grill",
        file: "feature-portrait-20261011-064636.jpg",
        kind: "image",
        format: "portrait",
        title: "Dum Pukht Biryani Showcase",
        caption: "Royal saffron aroma and melt-in-the-mouth meat cooked to perfection.",
        madeAt: "2026-10-11T06:46:36.000Z"
      },
      {
        slug: "zaiqa-royal-grill",
        file: "feature-portrait-20261011-064643.jpg",
        kind: "image",
        format: "portrait",
        title: "Charcoal BBQ Showcase",
        caption: "Tender Chicken Malai Boti & Seekh Kebabs fresh from the grill.",
        madeAt: "2026-10-11T06:46:43.000Z"
      },
      {
        slug: "zaiqa-royal-grill",
        file: "list-square-20261011-064655.jpg",
        kind: "image",
        format: "square",
        title: "Full Menu Highlights",
        caption: "Biryani, BBQ, Karahi, and Desserts - all in one royal feast.",
        madeAt: "2026-10-11T06:46:55.000Z"
      }
    ],
    posts: [
      {
        bufferId: "6acb9c58b07d37ac97ac65bf",
        channelId: "6acb15f6778b240e2fd2d1f5",
        channel: "sekhawatarain79",
        service: "instagram",
        file: "zaiqa-royal-grill/launch-card-video.mp4",
        url: "https://restaurant-website-alpha-azure.vercel.app/media/launch-card-video.mp4",
        dueAt: "2026-10-11T14:25:28.324Z",
        status: "sent",
        createdAt: "2026-10-11T14:25:28.324Z"
      },
      {
        bufferId: "6acb9c46ed92ed8fa5067176",
        channelId: "6acb1827778b240e2fd2e96f",
        channel: "sekhawatarain",
        service: "tiktok",
        file: "zaiqa-royal-grill/launch-card-video.mp4",
        url: "https://restaurant-website-alpha-azure.vercel.app/media/launch-card-video.mp4",
        dueAt: "2026-10-11T14:25:10.073Z",
        status: "sent",
        createdAt: "2026-10-11T14:25:10.073Z"
      },
      {
        bufferId: "6acb394cf91f772d45bd1f19",
        channelId: "6acb15f6778b240e2fd2d1f5",
        channel: "sekhawatarain79",
        service: "instagram",
        file: "zaiqa-royal-grill/reel-video.mp4",
        url: "https://restaurant-website-alpha-azure.vercel.app/media/reel-video.mp4",
        dueAt: "2026-10-11T07:22:52.101Z",
        status: "sent",
        createdAt: "2026-10-11T07:22:52.101Z"
      },
      {
        bufferId: "6acb3940ed92ed8fa5f58ab9",
        channelId: "6acb1827778b240e2fd2e96f",
        channel: "sekhawatarain",
        service: "tiktok",
        file: "zaiqa-royal-grill/reel-video.mp4",
        url: "https://restaurant-website-alpha-azure.vercel.app/media/reel-video.mp4",
        dueAt: "2026-10-11T07:22:40.338Z",
        status: "sent",
        createdAt: "2026-10-11T07:22:40.338Z"
      }
    ],
    claude: false
  };

  res.status(200).json(state);
}

