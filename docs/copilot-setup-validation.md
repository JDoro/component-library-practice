# Copilot Setup Steps Workflow Validation

This document describes the validation process for the `.github/workflows/copilot-setup-steps.yml` GitHub Actions workflow.

## Workflow Purpose

The `copilot-setup-steps.yml` workflow is designed to prepare the environment for GitHub Copilot agents by:
1. Checking out the repository code
2. Setting up Node.js 20 with npm caching
3. Installing JavaScript dependencies via `npm ci`
4. Installing Playwright browsers with system dependencies

## Workflow Configuration

### Triggers
The workflow runs automatically when:
- Manually triggered via `workflow_dispatch` (Actions tab)
- Changes are pushed to the workflow file itself
- Pull requests modify the workflow file

### Job Details
- **Job Name**: `copilot-setup-steps` (required name for Copilot integration)
- **Runs On**: `ubuntu-latest`
- **Permissions**: `contents: read` (minimal permissions for repository checkout)

## Validation Process

### Automated Validation Script

A validation script (`validate-copilot-setup.sh`) has been created to verify each step of the workflow:

```bash
./validate-copilot-setup.sh
```

The script validates:
1. ✓ Repository checkout (presence of `.git` and `package.json`)
2. ✓ Node.js 20.x installation
3. ✓ npm availability
4. ✓ Dependency installation (via `npm ci`)
5. ✓ Playwright installation and functionality
6. ✓ Playwright browser availability
7. ✓ Key npm scripts definition (lint, build, storybook, test-storybook:ci)

### Manual Validation Steps

You can manually validate each workflow step:

#### Step 1: Verify Repository Checkout
```bash
# Check if repository is cloned
ls -la .git
cat package.json
```

#### Step 2: Verify Node.js Installation
```bash
node --version  # Should show v20.x.x
npm --version   # Should show npm version
```

#### Step 3: Verify Dependency Installation
```bash
npm ci
```

Expected output: Dependencies installed successfully with no errors.

#### Step 4: Verify Playwright Installation
```bash
npx playwright --version
```

Expected output: Playwright version number (e.g., "Version 1.56.1")

#### Step 5: Verify Playwright Browsers
```bash
npx playwright install --with-deps
```

This ensures all required browsers (Chromium, Firefox, WebKit) and system dependencies are installed.

#### Step 6: Run Tests
```bash
npm run test-storybook:ci
```

Expected behavior: Tests execute successfully (note: visual snapshot tests may fail due to environment differences).

#### Step 7: Run Linting
```bash
npm run lint
```

Expected output: No linting errors.

## Validation Results

### Current Status: ✅ VALIDATED

All workflow steps have been validated and work correctly:

| Step | Status | Notes |
|------|--------|-------|
| Repository Checkout | ✅ | Successfully validates repo structure |
| Node.js 20 Setup | ✅ | Node.js v20.x installed |
| npm Installation | ✅ | npm v10.x available |
| Dependency Installation | ✅ | `npm ci` completes without errors |
| Playwright Installation | ✅ | Playwright 1.x functional |
| Playwright Browsers | ✅ | Browsers available for testing |
| Test Execution | ✅ | Tests run successfully |
| Linting | ✅ | Passes with no errors |

*Note: Specific versions may vary depending on the environment and updates.*

### Known Issues

- **Visual Snapshot Tests**: Tests may show snapshot differences across different environments (expected behavior for visual regression tests)
- **Build Script**: The `npm run build` command fails due to missing `index.html` (pre-existing issue, not related to copilot setup)

## Continuous Integration

The workflow automatically runs when:
- The workflow file is modified in a PR
- The workflow file is pushed to any branch
- Manually triggered from the GitHub Actions UI

This ensures any changes to the setup steps are automatically validated before being merged.

## Troubleshooting

### Dependency Installation Fails

If `npm ci` fails:
1. Check that `package-lock.json` exists and is up-to-date
2. Verify Node.js version matches the workflow (20.x)
3. Clear npm cache: `npm cache clean --force`
4. Delete `node_modules` and try again

### Playwright Installation Fails

If Playwright installation fails:
1. Ensure system dependencies are available (handled by `--with-deps`)
2. Check disk space availability
3. Verify network connectivity for browser downloads

### Tests Fail

If tests fail:
1. Check if it's a snapshot difference (expected in different environments)
2. Verify Playwright browsers are installed: `npx playwright install`
3. Run tests locally to compare results

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Playwright Documentation](https://playwright.dev/)
- [Node.js Setup Action](https://github.com/actions/setup-node)
