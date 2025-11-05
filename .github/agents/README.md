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

## How to Use Custom Agents

Custom agents can be invoked through GitHub Copilot in supported IDEs or through GitHub Copilot Workspace. The agents have specialized knowledge and context about this repository's structure, tools, and best practices.

To use an agent:
1. Reference the agent by name in your Copilot conversation
2. Describe what you want to accomplish
3. The agent will provide expert guidance and can make changes to workflows

Example:
```
@github-actions-expert help me create a new workflow to run tests on pull requests
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
