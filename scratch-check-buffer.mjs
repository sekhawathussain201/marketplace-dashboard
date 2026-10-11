import * as buf from "./app/lib/buffer.mjs";

const key = "HUC-AN2QaHzlfSBXhmjLOhhJOfK5a9q_RcPrYm3c0CB";

async function main() {
  const data = await buf.ask(key, `
    query {
      __type(name: "CreatePostInput") {
        inputFields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
              enumValues { name }
            }
          }
        }
      }
    }
  `);

  console.log("CreatePostInput fields:", JSON.stringify(data.__type?.inputFields, null, 2));
}

main().catch(console.error);
