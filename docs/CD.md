# Continuously Deploy

## Cloudflare Pages

Follow Cloudflare's [Doc](https://developers.cloudflare.com/pages/get-started/guide/) to connect this repo to Cloudflare Pages.

### Configure your build settings

- Framework preset: `None``
- Build command: `yarn && yarn build`
- Build output directory: `/dist`
- Root directory: `/preview-ui`

### Environment variables

Add `YARN_ENABLE_IMMUTABLE_INSTALLS=false` to the production and the preview environment variables, which solves an issue of `yarn3`.
