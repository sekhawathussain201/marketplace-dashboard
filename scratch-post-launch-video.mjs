import * as buf from "./app/lib/buffer.mjs";

const key = "HUC-AN2QaHzlfSBXhmjLOhhJOfK5a9q_RcPrYm3c0CB";
const videoUrl = "https://restaurant-website-alpha-azure.vercel.app/media/launch-card-video.mp4";
const caption = "🔥 Grand Launch of Zaiqa Royal Grill in Karachi! Experience authentic Dum Pukht Royal Biryani, juicy Charcoal BBQ sizzlers & Peshawari Karahi. Express 30-min delivery & live tracking. Order online now! #ZaiqaRoyalGrill #KarachiFood #BiryaniLovers #BBQ #FoodiesOfKarachi";

async function postNow(channelId, metadata, name) {
  console.log(`\nPosting launch video to ${name}...`);
  const input = {
    channelId,
    text: caption,
    schedulingType: "automatic",
    mode: "shareNow",
    needsApproval: false,
    assets: [
      {
        video: {
          url: videoUrl,
          metadata: {
            thumbnailOffset: 1500
          }
        }
      }
    ],
    metadata
  };

  const data = await buf.ask(
    key,
    `mutation Create($input: CreatePostInput!) {
       createPost(input: $input) {
         ... on PostActionSuccess { post { id dueAt status } }
         ... on MutationError { message }
       }
     }`,
    { input }
  );

  console.log(`${name} RESPONSE:`, JSON.stringify(data, null, 2));
  return data;
}

async function main() {
  console.log("Publishing Launch Card Video:", videoUrl);

  // 1. TikTok (@sekhawatarain)
  try {
    await postNow(
      "6acb1827778b240e2fd2e96f",
      { tiktok: { title: "Zaiqa Royal Grill - Grand Launch" } },
      "TikTok (@sekhawatarain)"
    );
  } catch (e) {
    console.error("TikTok Error:", e.message);
  }

  // 2. Instagram (@sekhawatarain79)
  try {
    await postNow(
      "6acb15f6778b240e2fd2d1f5",
      { instagram: { type: "reel", shouldShareToFeed: true } },
      "Instagram (@sekhawatarain79)"
    );
  } catch (e) {
    console.error("Instagram Error:", e.message);
  }
}

main().catch(console.error);

