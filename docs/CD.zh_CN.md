# 持续部署

## Cloudflare Pages

按照 Cloudflare 的[文档](https://developers.cloudflare.com/pages/get-started/guide/)将此仓库连接到 Cloudflare Pages。

### 配置您的构建设置

- Framework preset: `None``
- Build command: `yarn && yarn build`
- Build output directory: `/dist`
- Root directory: `/preview-ui`

### 环境变量

向生产和预览环境变量添加 `YARN_ENABLE_IMMUTABLE_INSTALLS=false`，这可以解决 `yarn3` 的一个问题。
