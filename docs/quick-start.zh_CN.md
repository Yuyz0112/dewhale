# 快速入门

## 用模板创建仓库

1.  为了自动创建专用 label 和 badge，要在你的 GitHub 账号或组织中安装 **GitHub 应用**：

    1.  [Probot settings][1]
    2.  [PR badge][2]

2.  在本 GitHub 仓库主页顶部点击 **[Use this template][3] 按钮**，然后在安装了上述 GitHub 应用的命名空间中创建你自己的仓库。

## 设置仓库 secret

用户可以基于当前的模板仓库创建自己的 Dewhale 仓库。在仓库的[settings -> secrets and variables -> actions][4]部分，需要设置以下仓库 secret:

- `OPENAI_API_KEY`：这是一个 OpenAI API 密钥。[如何创建?][5]
- `WHITELIST`：允许使用 Dewhale 的 GitHub 用户名列表，用逗号分隔。仅由 WHITELIST 中的用户创建的 issue 和评论才会受到 Dewhale 的响应，确保 API 使用安全。

## 创建 Issue

设置完成后，用户可以创建 issue 来描述他们的需求。标记了 `ui-gen` 的 issue 将触发 Dewhale 生成代码的 PR。

用户可以通过 issue 或 PR 中的评论修改 issue 描述或迭代 UI 需求。所有这些信息将被并入 Dewhale 的提示中。

在后台，Dewhale 使用 Github Actions 创建工作流，因此您可以通过查看工作流日志进行调试。

## 预览 UI

Dewhale 包含预览 UI 功能。在模板仓库中，我们通过 Cloudflare Pages 不断部署以预览生成的 UI 结果。或者你也可以使用其他部署服务厂商完成这一步骤。

[如何配置持续部署](./CD.zh_CN.md)。

[1]: https://github.com/apps/settings
[2]: https://pullrequestbadge.com/
[3]: https://github.com/new?template_name=dewhale&template_owner=Yuyz0112
[4]: https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository
[5]: https://platform.openai.com/docs/quickstart/account-setup
