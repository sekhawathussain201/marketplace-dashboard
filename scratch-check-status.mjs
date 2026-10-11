import * as buf from "./app/lib/buffer.mjs";

const key = "HUC-AN2QaHzlfSBXhmjLOhhJOfK5a9q_RcPrYm3c0CB";
const query = `
  query GetPosts($channelId: ChannelId!) {
    posts(channelId: $channelId, status: [sent, sending, drafts, scheduled, failed]) {
      totalCount
      edges {
        node {
          id
          status
          dueAt
          text
        }
      }
    }
  }
`;

async function run() {
  for (const cid of ["6acb1827778b240e2fd2e96f", "6acb15f6778b240e2fd2d1f5"]) {
    try {
      const res = await buf.ask(key, query, { channelId: cid });
      console.log("Channel", cid, JSON.stringify(res, null, 2));
    } catch(e) {
      console.error("Error for", cid, e.message);
    }
  }
}

run();

