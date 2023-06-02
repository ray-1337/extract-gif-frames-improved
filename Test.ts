import test from "ava";
import extract from "./src/Index";
import path from "node:path";
import { rm } from "node:fs/promises";

test("parse full GIF to jpg", async (t) => {
  const blobSpitGIF = "https://cdn.discordapp.com/emojis/948641861491372092.gif?size=128";
  
  const extractProcess = await extract(blobSpitGIF, path.join(__dirname, "extr"));

  t.is(extractProcess, true);

  return rm(path.join(__dirname, "extr"), { recursive: true, force: true });
});