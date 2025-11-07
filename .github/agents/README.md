# GitHub Copilot Custom Agents

This directory contains custom GitHub Copilot agent profiles that provide specialized expertise for working with this repository.

## Available Agents

### GitHub Actions Expert (`github-actions-expert`)

**File:** `github-actions-expert.md`

**Purpose:** Expert in designing, maintaining, and optimizing GitHub Actions workflows for building, testing, and deploying this React component library.

**Specializations:**
- CI/CD pipeline design and optimization
- Workflow structure and best practices
- Security hardening and secrets management
- Performance optimization with caching and parallelization
- Testing strategies with Playwright and Storybook
- Deployment automation to GitHub Pages
- Error handling and debugging

**When to Use:**
- Creating new GitHub Actions workflows
- Optimizing existing workflows
- Troubleshooting CI/CD issues
- Adding new automation features
- Implementing security best practices
- Setting up deployment pipelines

**Tools Available:**
- `read`: Read repository files
- `edit`: Modify files
- `search`: Search codebase
- `bash`: Execute commands

### Storybook Expert (`storybook-expert`)

**File:** `storybook-expert.md`

**Purpose:** Expert in creating comprehensive Storybook stories that exercise all component props and ensure event handlers correctly update Storybook arg control values using useArgs.

**Specializations:**
- Creating stories that demonstrate every component prop
- Implementing useArgs() for controlled components
- Mocking event handlers with fn() from @storybook/test
- Creating interactive controls that sync with component state
- Following repository coding standards and patterns
- Ensuring comprehensive prop coverage across stories
- Creating accessible stories with proper ARIA attributes
- Organizing stories by component variants and states

**When to Use:**
- Creating new Storybook stories for components
- Adding missing stories to improve prop coverage
- Implementing useArgs for controlled components (inputs, selects, checkboxes)
- Ensuring event handlers update Storybook controls correctly
- Creating stories that demonstrate all prop variations
- Following best practices for story organization
- Setting up interactive controls and argTypes
- Creating comprehensive story coverage for components

**Tools Available:**
- `read`: Read repository files
- `edit`: Modify files
- `search`: Search codebase
- `bash`: Execute commands
- `view`: View files and directories

### Storybook Validator (`storybook-validator`)

**File:** `storybook-validator.md`

**Purpose:** Expert in running Storybook, validating that all controls work as intended, and proposing fixes for component issues. Specializes in interactive testing, visual validation, and accessibility checks.

**Specializations:**
- Running Storybook in development and test modes
- Validating interactive controls work correctly
- Testing component behavior with different prop combinations
- Identifying and diagnosing control/rendering issues
- Proposing specific fixes for broken functionality
- Visual regression testing with screenshots
- Accessibility validation using Axe
- Interactive testing with Playwright browser tools
- Comprehensive validation reporting

**When to Use:**
- Validating new or modified Storybook stories
- Testing that component controls work as expected
- Diagnosing why controls aren't updating components
- Verifying event handlers are properly mocked
- Checking accessibility compliance
- Visual validation of component rendering
- Interactive testing of component behaviors
- Before committing changes to components
- Generating validation reports for pull requests

**Tools Available:**
- Playwright browser tools (navigate, snapshot, click, type, screenshot, etc.)
- `bash`: Execute commands (start Storybook, run tests)
- `read`: Read repository files
- `edit`: Modify files to fix issues
- `search`: Search codebase
- `view`: View files and directories

## How to Use Custom Agents

Custom agents can be invoked through GitHub Copilot in supported IDEs or through GitHub Copilot Workspace. The agents have specialized knowledge and context about this repository's structure, tools, and best practices.

To use an agent:
1. Reference the agent by name in your Copilot conversation
2. Describe what you want to accomplish
3. The agent will provide expert guidance and can make changes to workflows

Example:
```
@github-actions-expert help me create a new workflow to run tests on pull requests

@storybook-expert create comprehensive stories for the Card component that exercise all props and use useArgs for interactive controls

@storybook-validator validate the Button component and ensure all controls work correctly
```

## Agent Configuration Format

Each agent is defined in a Markdown file with YAML frontmatter:

```yaml
---
name: agent-name
description: Brief description of the agent's purpose
tools:
  - read
  - edit
  - search
  - bash
---
```

The rest of the file contains detailed instructions and knowledge for the agent in Markdown format.

## Contributing

When adding new agents:
1. Create a new `.md` file in this directory
2. Include proper YAML frontmatter with `name`, `description`, and `tools`
3. Provide comprehensive instructions and context
4. Document the agent in this README
5. Test the agent with common use cases

## Learn More

- [GitHub Copilot Custom Agents Documentation](https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents)
- [Custom Agents Configuration Reference](https://docs.github.com/en/copilot/reference/custom-agents-configuration)
