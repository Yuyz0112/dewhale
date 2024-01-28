<p align="center">
  <img width="150px" height="150px" src="./preview-ui/public/logo.png">
</p>

# Dewhale

Dewhale 是一个充分发挥 Github 平台能力的通用 AI 工作流。

## 快速入门

有关如何设置和使用 Dewhale 的详细说明，请参阅我们的[指南](./docs/quick-start.zh_CN.md)。

> 在配额管理功能的帮助下，我们允许 stargazers 试用 3 次。

您也可以观看这个[演示视频](http://www.youtube.com/watch?v=J4LAOBRcu2c)。

更多示例可以在[问题列表](https://github.com/Yuyz0112/dewhale/issues?q=is%3Aissue+label%3Aui-gen%2Cvue-ui-gen)中找到。

## 特性

### 更低的使用成本

Dewhale 在 GPT-4 模型下利用提示工程技术发出指令。成本主要涉及输入和补全 token 的数量。我们当前的提示词位于 [prompts/ui-gen.md](./prompts/ui-gen.md)，包含了如何使用 [shadcn/ui](https://ui.shadcn.com/)、[lucide](https://lucide.dev/) 和 [nivo 图表](https://nivo.rocks/)的指令。

如果您不需要某些组件(例如图表)，则可以通过从提示中删除指令来减少每次代码生成的 API 成本。

您也可以切换到其他 AI 模型以降低使用成本。

### 易于定制

由于 Dewhale 的提示词是开源的，您可以参考现有的提示并将其替换为其他 UI 组件库或编码风格以满足您的要求。

您还可以完全自行定制整个工作流，例如使用 Dewhale 的提示词作为核心，开发一个类似 v0.dev 的 Web 应用。

### 无缝 GitHub 集成

生成的代码存储在 GitHub 上，天然内置版本控制、代码审查和协作功能。

此外，您可以使用私有仓库控制代码的可见性。

## 工作原理

要了解 Dewhale 的底层架构和工作原理，请参阅我们详细的[架构概述](./docs/architecture.zh_CN.md)。

## 加入讨论

如果你喜欢 Dewhale 的设计理念，请随时加入我们的 [Github 讨论](https://github.com/Yuyz0112/dewhale/discussions)。
