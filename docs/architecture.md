# Architecture of Dewhale

## Overview

Dewhale is designed as an open-source alternative to v0.dev, integrating advanced prompt engineering with GitHub for efficient UI generation and code optimization. The architecture of Dewhale comprises three primary components:

1. **Prompt Engineering**: Utilizing AI models to output code that meets specific requirements.
2. **Code Generation Optimization**: Adjusting flawed AI-generated results through manipulation of the code's Abstract Syntax Tree (AST).
3. **GitHub Integration**: Leveraging GitHub API and GitHub Actions for user interaction and workflow automation.

## Prompt

The prompt forms the core of Dewhale, playing a pivotal role in guiding the AI model to generate high quality code. We have meticulously designed our prompts to closely align with the output style and quality of v0.dev. This involves:

- **UI Component Library**: We use `@shadcn/ui` as the UI component library, incorporating its usage documentation as examples in our prompts, with slight modifications.
- **Icon Library**: After experiments, we allow AI more freedom in selecting icons from the known `lucide` icon set. Errors in icon imports are corrected in the code generation optimization phase.
- **Chart Library**: Drawing from v0.dev's outputs, we've included usage examples for `@nivo/pie`, `@nivo/line`, `@nivo/heatmap`, `@nivo/scatterplot`, and `@nivo/bar` in our prompts.

**An important learning from v0.dev is to generate entirely static JSX code, which, despite seemingly limiting use cases, significantly improves stability.**

## Code Generation Optimization

In practice, AI tends to make repetitive mistakes that are hard to eliminate through prompt adjustments. Typical issues include:

1. Incorrect import paths for UI components.
2. Incorrect or missing imports for icons from lucide, or importing non-existent icons.

After reverse-engineering v0.dev's approach, we've developed a method to correct these issues by analyzing the code's AST.

We identify the variables used and determine their correct import sources. The lucide project even provides an API to fetch all available icons, allowing us to streamline our prompts and optimize generated code based on the lucide API.

This optimization significantly enhances the stability of code generation.

## GitHub Integration

The integration with GitHub involves triggering workflows based on issue and issue comment events. The workflow includes:

- Filtering based on labels, the initiator, and content to decide if code generation should be triggered.
- Creating a branch and corresponding PR for the first-time code generation of an issue.
- Extracting text and images from user input, combined with system prompts, to feed the AI model. The generated code then enters the optimization process where it is refined and improved, followed by the inclusion of the optimized code in the PR.
