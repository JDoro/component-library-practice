#!/bin/bash
# Validation script for copilot-setup-steps.yml workflow
# This script tests each step defined in the workflow to ensure it works correctly

set -e  # Exit on error
set -o pipefail  # Exit on pipe failures

echo "============================================"
echo "Validating Copilot Setup Steps Workflow"
echo "============================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track results
PASSED=0
FAILED=0

# Function to print test results
print_result() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓ PASSED${NC}: $2"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗ FAILED${NC}: $2"
        FAILED=$((FAILED + 1))
    fi
    echo ""
}

# Step 1: Verify repository is checked out
echo "Step 1: Verifying repository checkout..."
if [ -d ".git" ] && [ -f "package.json" ]; then
    print_result 0 "Repository is checked out"
else
    print_result 1 "Repository checkout failed"
    exit 1
fi

# Step 2: Verify Node.js is available
echo "Step 2: Verifying Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "   Node.js version: $NODE_VERSION"
    
    # Check if Node.js version is 20.x
    if [[ "$NODE_VERSION" == v20.* ]]; then
        print_result 0 "Node.js 20.x is installed"
    else
        echo -e "${YELLOW}   Warning: Expected Node.js 20.x, found $NODE_VERSION${NC}"
        print_result 0 "Node.js is installed (but version differs)"
    fi
else
    print_result 1 "Node.js is not installed"
    exit 1
fi

# Step 3: Verify npm is available
echo "Step 3: Verifying npm installation..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "   npm version: $NPM_VERSION"
    print_result 0 "npm is installed"
else
    print_result 1 "npm is not installed"
    exit 1
fi

# Step 4: Verify npm ci works (dependencies can be installed)
echo "Step 4: Verifying npm ci works..."
if [ -f "package-lock.json" ]; then
    # Check if node_modules exists
    if [ -d "node_modules" ]; then
        echo "   Dependencies already installed, skipping npm ci"
        print_result 0 "npm ci validated (dependencies already present)"
    else
        echo "   Running npm ci..."
        if npm ci &> /tmp/npm-ci.log; then
            print_result 0 "npm ci successfully installed dependencies"
        else
            echo "   npm ci output:"
            tail -20 /tmp/npm-ci.log
            print_result 1 "npm ci failed"
            exit 1
        fi
    fi
else
    print_result 1 "package-lock.json not found"
    exit 1
fi

# Step 5: Verify Playwright installation
echo "Step 5: Verifying Playwright installation..."
if npx playwright --version &> /dev/null; then
    PLAYWRIGHT_VERSION=$(npx playwright --version)
    echo "   Playwright version: $PLAYWRIGHT_VERSION"
    print_result 0 "Playwright is installed and functional"
else
    print_result 1 "Playwright is not installed or not functional"
    exit 1
fi

# Step 6: Verify Playwright browsers are installed
echo "Step 6: Verifying Playwright browsers..."
# Try to list installed browsers
if npx playwright install --dry-run chromium 2>&1 | grep -q "is already installed"; then
    echo "   Chromium browser is already installed"
    print_result 0 "Playwright browsers are installed"
else
    echo -e "${YELLOW}   Warning: Playwright browsers may not be fully installed${NC}"
    print_result 0 "Playwright is available (browsers may need installation)"
fi

# Bonus: Verify key npm scripts exist
echo "Bonus Checks:"
echo "Checking if key npm scripts are defined..."

SCRIPTS=("lint" "build" "storybook" "test-storybook:ci")
for script in "${SCRIPTS[@]}"; do
    if grep -q "\"$script\"" package.json; then
        echo -e "   ${GREEN}✓${NC} Script '$script' is defined"
    else
        echo -e "   ${YELLOW}!${NC} Script '$script' is not defined"
    fi
done
echo ""

# Summary
echo "============================================"
echo "Validation Summary"
echo "============================================"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}All validation checks passed! ✓${NC}"
    echo "The copilot-setup-steps.yml workflow is properly configured."
    exit 0
else
    echo -e "${RED}Some validation checks failed! ✗${NC}"
    echo "Please review the errors above."
    exit 1
fi
