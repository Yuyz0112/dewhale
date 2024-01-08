<p align="center">
  <img width="150px" height="150px" src="./preview-ui/public/logo.jpg">
</p>

# vx.dev

An open-source alternative to Vercel's [v0.dev](https://v0.dev/). Cost-effective, highly customizable, and seamlessly integrated within GitHub.

[中文文档](./README.zh_CN.md)

## Quick Start

For detailed instructions on how to set up and use vx.dev, please refer to our [Guide](./docs/quick-start.md).

You can also watch this [demo video](http://www.youtube.com/watch?v=J4LAOBRcu2c).

More examples can be found in the [issue list](https://github.com/Yuyz0112/vx.dev/issues?q=is%3Aissue+label%3Aui-gen%2Cvue-ui-gen).

## Features

### Lower Usage Costs

vx.dev utilizes prompt engineering techniques under the GPT-4 model to issue commands. The main cost involves the number of input and completion tokens. Our current prompt, found in [prompts/ui-gen.md](./prompts/ui-gen.md), includes instructions for [shadcn/ui](https://ui.shadcn.com/), [lucide](https://lucide.dev/), and [nivo charts](https://nivo.rocks/).

If you do not need certain components (e.g., charts), you can reduce the API cost per generation by removing instructions from the prompt.

And you can also switch to other AI models for lower usage costs.

### Easy Customization

Since vx.dev's prompt is open-sourced, you can refer to the existing prompt and replace it with other UI component libraries or coding styles as per your requirements.

You can also customize the whole workflow by yourself, e.g., a v0.dev-like Web App, and just use vx.dev's prompt as a core.

### Seamless GitHub Integration

The generated code is stored on GitHub, inherently equipped with version control, code review, and collaborative features.

Additionally, you can use a private repo to keep your code generation results visible only to collaborators.

## How It Works

To understand the underlying architecture and workings of vx.dev, please see our detailed [Architecture Overview](./docs/architecture.md).

## Roadmap

As vx.dev continues to evolve, we have outlined key features that we plan to implement in the near future:

- **Precise Iteration through Code Review Comments**: We aim to support the ability to precisely iterate parts of the code via code review comments. This feature will allow users to make specific requests or suggestions for code modifications directly within the comments of a code review.
