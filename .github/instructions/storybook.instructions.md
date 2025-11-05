---
title: Storybook Copilot Instructions
applyTo: "**/*.stories.js,**/*.stories.jsx,**/*.stories.ts,**/*.stories.tsx"
---
# Storybook Copilot Instructions

This instruction set is tailored to help GitHub Copilot generate code for Storybook
stories in a React component library.

This is an extension of the .github/copilot-instructions.md file.

## Coding Standards

### Stories

- Each story file should be named with the component name followed by `.stories.tsx`
  (e.g., `Button.stories.tsx`).
- Each story file should export a default `meta` object containing the 
component's title and component reference.
- Each story should be defined as a named export.
- Use Storybook's Args mechanism to define component props for stories.
- Components should have a story that demonstrates how each of their props 
affects how the component renders.
- Manually mock all event handling functions (e.g., `onClick`, `onChange`) using
  Storybook's `fn()` function from `@storybook/test`.
- Use the `useArgs()` hook from `@storybook/preview-api` to manage and update args
  within stories when necessary.
