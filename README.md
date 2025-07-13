# Component Library Practice

A React component library built with TypeScript, Vite, and Storybook.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation
```bash
npm install
```

### Development

#### Start Storybook
To view and develop components in Storybook:
```bash
npm run storybook
```
This will start Storybook on `http://localhost:6006`

#### Run Tests
To run the Storybook test suite:
```bash
npm run test-storybook:ci
```

For running tests with coverage:
```bash
npm run test-storybook:coverage
```

#### Run Linting
To check code quality and style:
```bash
npm run lint
```

### Build
To build the project:
```bash
npm run build
```

## Contributing

### ESLint Configuration
This project uses ESLint for code quality. The linting rules are configured in `.eslintrc.cjs`. To customize the ESLint configuration for more advanced type checking, refer to the [@typescript-eslint documentation](https://typescript-eslint.io/).
