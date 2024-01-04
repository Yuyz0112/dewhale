# 快速入门

## 设置仓库 secret

用户可以基于当前的模板仓库创建自己的 vx.dev 仓库。在仓库的[settings -> secrets and variables -> actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)部分，需要设置以下仓库 secret:

- `GH_TOKEN`：这应该是一个具有 repo 范围权限的 GitHub 个人访问令牌。[如何创建?](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- `OPENAI_API_KEY`：这是一个 OpenAI API 密钥。[如何创建?](https://platform.openai.com/docs/quickstart/account-setup)
- `WHITELIST`：允许使用 vx.dev 的 GitHub 用户名列表，用逗号分隔。仅由 WHITELIST 中的用户创建的 issue 和评论才会受到 vx.dev 的响应，确保 API 使用安全。

## 创建 Issue

设置完成后，用户可以创建 issue 来描述他们的需求。标记了 `ui-gen` 的 issue 将触发 vx.dev 生成代码的 PR。

用户可以通过 issue 或 PR 中的评论修改 issue 描述或迭代 UI 需求。所有这些信息将被并入 vx.dev 的提示中。

在后台，vx.dev 使用 Github Actions 创建工作流，因此您可以通过查看工作流日志进行调试。

## 预览 UI

vx.dev 包含预览 UI 功能。在模板仓库中，我们通过 Cloudflare Pages 不断部署以预览生成的 UI 结果。 alternatively， other service providers can be used for this process.

[如何配置持续部署](./CD.zh_CN.md)。
