import savePixels from "save-pixels";
import getPixels from "get-pixels";
import { createWriteStream, existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

export default async function(url: string, outputDirectoryPath: string, type?: Parameters<typeof savePixels>[1], quality?: number) {
  return await new Promise<boolean>(async (resolve, reject) => {
    if (!existsSync(outputDirectoryPath)) {
      try {
        await mkdir(outputDirectoryPath, { recursive: true });
      } catch (error) {
        return reject(error);
      };
    };

    getPixels(url, async (error, pixels) => {
      if (error) {
        return reject(error);
      };

      if (pixels.shape.length < 4) {
        return reject(new Error('"url" input should be multi-frame GIF.'));
      };

      const ext = type || "jpg";
      
      for (let i = 0; i < pixels.shape[0]; i++) {
        await new Promise((streamResolve, streamReject) => {
          const extractedFrame = createWriteStream(join(outputDirectoryPath, `${i}.${ext}`))
          .on("finish", () => streamResolve(true))
          .on("error", (error) => streamReject(error));
        
          savePixels(pixels.pick(i), ext, {
            quality: quality || 100
          })
          .pipe(extractedFrame);
        });

        continue;
      };

      resolve(true);
    });
  })
};