import process from 'node:process';

import { beforeAll, describe, expect, it } from 'vitest';

import get from '@nwutils/getter';
import run from '../../src/main.js';

const PLATFORM_KV = {
  darwin: 'osx',
  linux: 'linux',
  win32: 'win',
};

const ARCH_KV = {
  x64: 'x64',
  ia32: 'ia32',
  arm64: 'arm64',
};

describe('runner test suite', async () => {

  const nwOptions = {
    srcDir: 'tests/fixtures/app',
    mode: 'build',
    version: '0.108.0',
    flavor: 'sdk',
    platform: PLATFORM_KV[process.platform],
    arch: ARCH_KV[process.arch],
    downloadUrl: 'https://dl.nwjs.io',
    manifestUrl: 'https://nwjs.io/versions.json',
    outDir: 'tests/fixtures/out/app',
    cacheDir: './cache/nw',
    cache: true,
    ffmpeg: false,
    glob: false,
    managedManifest: false,
    nativeAddon: false,
    zip: false,
    shaSum: false,
  }

  beforeAll(async () => {
    await get(nwOptions);
  }, Infinity);

  it.skipIf(process.platform === 'win32')('runs and is killed via code', async () => {
    const nwProcess = await run(nwOptions);
    if (nwProcess) {
      nwProcess.kill();
      expect(nwProcess.killed).toEqual(true);
    }
  });
});
