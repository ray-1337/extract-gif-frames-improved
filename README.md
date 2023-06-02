# Extract GIF Frames
Extract GIF frames fully to JPG/JPEG, adapted from [benwiley4000/gif-frames](https://github.com/benwiley4000/gif-frames).

# Examples
```ts
import extract from "extract-gif-frames-improved";

const GIF = "https://cdn.discordapp.com/emojis/948822035197493268.gif?size=96&quality=lossless";

extract(GIF, "/home/ray/gif/extracted/");
```

```js
const extract = require("extract-gif-frames-improved").default;

const GIF = "https://cdn.discordapp.com/emojis/948822035197493268.gif?size=96&quality=lossless";

extract(GIF, "/home/ray/gif/extracted/");
```

# LICENSE
[MIT](LICENSE)