import savePixels from "save-pixels";
export default function (url: string, outputDirectoryPath: string, type?: Parameters<typeof savePixels>[1], quality?: number): Promise<boolean>;