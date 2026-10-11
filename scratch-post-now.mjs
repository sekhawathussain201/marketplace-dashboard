import * as buf from "./app/lib/buffer.mjs";

const key = "HUC-AN2QaHzlfSBXhmjLOhhJOfK5a9q_RcPrYm3c0CB";
const videoUrl = "https://tests-blogs-pottery-tube.trycloudflare.com/media/reel-video.mp4";
const caption = "Taste the true royal charcoal fire at Zaiqa Royal Grill! Karachi's authentic dum pukht biryani & live BBQ sizzlers. Order online & track live! #ZaiqaRoyalGrill #KarachiFood #Biryani";

async function postNow(channelId, metadata, name) {
  console.log(`Posting now to ${name}...`);
  const input = {
    channelId,
    text: caption,
    schedulingType: "automatic",
    mode: "shareNow",
    needsApproval: false,
    assets: [{ video: { url: videoUrl, metadata: { thumbnailOffset: 1500 } } }],
    metadata,
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
  console.log(`${name} RESULT:`, JSON.stringify(data));
  return data;
}

async function main() {
  // 1. TikTok (@sekhawatarain)
  try {
    await postNow(
      "6acb1827778b240e2fd2e96f",
      { tiktok: { title: "Zaiqa Royal Grill - Charcoal Fire" } },
      "TikTok (@sekhawatarain)"
    );
  } catch (e) {
    console.error("TikTok error:", e.message);
  }

  // 2. Instagram (@sekhawatarain79)
  try {
    await postNow(
      "6acb15f6778b240e2fd2d1f5",
      { instagram: { type: "reel", shouldShareToFeed: true } },
      "Instagram (@sekhawatarain79)"
    );
  } catch (e) {
    console.error("Instagram error:", e.message);
  }
}

main().catch(console.error);
