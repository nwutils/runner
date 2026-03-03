export default get;
export type Options = {
    /**
     * Runtime version
     */
    version: string | "latest" | "stable" | "lts";
    /**
     * Build flavor
     */
    flavor: "normal" | "sdk";
    /**
     * Target platform
     */
    platform: "linux" | "osx" | "win";
    /**
     * Target architecture
     */
    arch: "ia32" | "x64" | "arm64";
    /**
     * Cache directory
     */
    cacheDir: string;
    /**
     * List of CLI arguments to be passed to NW.js.
     */
    argv: string[];
};
/**
 * @typedef {object} Options
 * @property {string | "latest" | "stable" | "lts"} version                    Runtime version
 * @property {"normal" | "sdk"}                     flavor                     Build flavor
 * @property {"linux" | "osx" | "win"}              platform                   Target platform
 * @property {"ia32" | "x64" | "arm64"}             arch                       Target architecture
 * @property {string}                               cacheDir                   Cache directory
 * @property {string[]}                              argv                      List of CLI arguments to be passed to NW.js.
 */
/**
 * Get NW.js and related binaries for Linux, MacOS and Windows.
 * @async
 * @function
 * @param  {Options}    options  Get mode options
 * @returns {Promise<void>}
 */
declare function get(options: Options): Promise<void>;
