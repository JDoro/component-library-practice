# Copilot Instructions

## Overview
These instructions are designed to help GitHub Copilot understand the context
and requirements for generating code in this repository.

### Repository Purpose

This repository contains a React component library built with TypeScript, Vite,
and Storybook. It provides reusable UI components for building web applications.

### Key Features
- A collection of customizable and accessible React components.
- Integration with Storybook for component development and documentation.
- TypeScript support for type safety and improved developer experience.
- Built with Vite for fast development and optimized builds.
- Comprehensive testing setup for ensuring component reliability.
- Generated image snapshots for visual regression testing.
- Generated A11y accessibility tests to ensure components meet accessibility standards.
- Generated documentation for easy reference and usage.
- Linting and formatting tools to maintain code quality and consistency.

### Languages
- TypeScript
- JavaScript
- JSON
- Markdown

### Frameworks and Libraries
- React
- Vite
- Storybook
- Jest
- ESLint
- Prettier

### Folder Structure
- `src/`: Contains the source code for the React components.
- `src/assets/`: Contains static assets such as images and styles.
- `src/atoms/`: Contains atomic components. These are the most basic building 
blocks.
- `src/molecules/`: Contains molecular components. These are components that 
are made up of multiple atoms.
- `src/organisms/`: Contains organism components. These are more complex components
that are made up of multiple molecules and/or atoms.
- `.storybook/`: Configuration files for Storybook.

## Coding Standards

### Indentation

Use 2 spaces for indentation.

### Line Length

Limit lines to a maximum of 80 characters.

### Naming Conventions

- Use camelCase for variable and function names.
- Use PascalCase for component and class names.
- Use UPPER_SNAKE_CASE for constants.
- Use kebab-case for file and folder names.
- Use descriptive names that clearly indicate the purpose of the variable,
  function, or component.
- Avoid abbreviations unless they are widely recognized.
- Prefix boolean variables and functions with "is", "has", "can", or "should".
- Avoid using reserved words or names that may conflict with existing libraries.
- Ensure consistency in naming conventions throughout the codebase.

### Comments

- Use comments to explain the purpose of complex code blocks or functions.
- Avoid redundant comments that do not add value or clarity to the code.
- Keep comments up-to-date with code changes to prevent misinformation.
- Use comments to indicate TODOs, FIXMEs, and other notes for future improvements or
  refactoring.

### style
- Always use semicolons at the end of statements.
- Always surround loop and conditional blocks with curly braces `{}`.
- Open braces `{` should be on the same line as the control statement.

