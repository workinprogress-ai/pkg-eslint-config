# `@workinprogress-ai/eslint-config`

ESLint configuration package with integrated Prettier formatting for TypeScript and JavaScript projects.

## Features

-   **Modern ESLint Flat Config** - Uses the latest ESLint configuration format
-   **TypeScript Support** - Strict TypeScript rules with sensible defaults
-   **Prettier Integration** - Built-in Prettier rules for consistent formatting
-   **Node.js Ready** - Configured for Node.js and ES2022+ environments
-   **Monorepo Friendly** - Optimized for monorepo setups with proper ignore patterns
-   **Zero Configuration** - All dependencies included, just install and use
-   **React Support** - Optional React configuration available

## Installation

```bash
pnpm add -D @workinprogress-ai/eslint-config
```

That's it! All ESLint, Prettier, and TypeScript dependencies are included automatically.

## Quick Start

Create an `eslint.config.js` file in your project root:

```javascript
import baseConfig from '@workinprogress-ai/eslint-config/eslint.base.config.js';

export default [...baseConfig];
```

Add scripts to your `package.json`:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

## Usage Examples

### Basic TypeScript/JavaScript Project

```javascript
// eslint.config.js
import baseConfig from '@workinprogress-ai/eslint-config';

export default [...baseConfig];
```

### React Project

```javascript
// eslint.config.js
import reactConfig from '@workinprogress-ai/eslint-config/eslint.react.config.js';

export default [...reactConfig]; // Base config included internally
```

### Using Prettier Config Separately

You can also import the Prettier configuration for other tools:

```javascript
// prettier.config.js
import prettierConfig from '@workinprogress-ai/eslint-config/prettier.config.js';

export default prettierConfig;
```

### Custom Rules

```javascript
// eslint.config.js
import baseConfig from '@workinprogress-ai/eslint-config';

export default [
    ...baseConfig,
    {
        rules: {
            'no-console': 'warn', // Override: change from error to warn
            '@typescript-eslint/no-explicit-any': 'error', // Override: re-enable strict any checking
        },
    },
];
```

### Environment-Specific Overrides

```javascript
// eslint.config.js
import baseConfig from '@workinprogress-ai/eslint-config';

export default [
    ...baseConfig,
    {
        files: ['**/*.test.ts', '**/*.spec.ts'],
        rules: {
            'no-console': 'off', // Allow console in test files
        },
    },
    {
        files: ['scripts/**/*.js'],
        rules: {
            'no-console': 'warn', // Allow console in build scripts
        },
    },
];
```

## What's Included

### ESLint Rules

-   **Base ESLint** - Core recommended rules
-   **TypeScript** - Strict TypeScript configuration
-   **Code Quality** - Best practices and error prevention
-   **Modern JavaScript** - ES2022+ features support

### Prettier Integration

-   **Consistent Formatting** - Predefined Prettier rules
-   **No Conflicts** - ESLint and Prettier work together seamlessly
-   **One Command** - `eslint --fix` handles both linting and formatting

### Key Rules Summary

| Rule                                       | Setting | Purpose                                       |
| ------------------------------------------ | ------- | --------------------------------------------- |
| `no-console`                               | `error` | Prevent console statements in production      |
| `no-debugger`                              | `error` | Remove debugger statements                    |
| `prefer-const`                             | `error` | Use const when possible                       |
| `@typescript-eslint/no-unused-vars`        | `error` | Remove unused variables (except `_` prefixed) |
| `@typescript-eslint/prefer-optional-chain` | `error` | Use optional chaining                         |
| `prettier/prettier`                        | `error` | Enforce Prettier formatting                   |

### Prettier Configuration

```json
{
    "singleQuote": true,
    "printWidth": 200,
    "tabWidth": 4,
    "useTabs": false,
    "insertFinalNewline": true
}
```

### Ignored Patterns

-   `**/dist/**` - Build outputs
-   `**/build/**` - Build outputs
-   `**/out/**` - Build outputs
-   `**/.next/**` - Next.js outputs
-   `**/node_modules/**` - Dependencies
-   `**/.git/**` - Version control
-   `**/*.d.ts` - TypeScript declarations
-   `**/coverage/**` - Test coverage
-   `**/.cache/**` - General cache

## Available Exports

This package provides multiple entry points:

-   `@workinprogress-ai/eslint-config` - Base ESLint configuration (default export)
-   `@workinprogress-ai/eslint-config/eslint.base.config.js` - Base ESLint configuration (explicit)
-   `@workinprogress-ai/eslint-config/eslint.react.config.js` - React-specific configuration
-   `@workinprogress-ai/eslint-config/prettier.config.js` - Prettier configuration

## Package Contents

When you install this package, you get:

-   **ESLint** (v9.11.1) - The linter
-   **Prettier** (v3.3.3) - The formatter
-   **TypeScript** (v5.6.2) - TypeScript support
-   **typescript-eslint** (v8.7.0) - TypeScript ESLint integration
-   **All necessary plugins and configs** - No additional setup needed

## Repository

[github.com/workinprogress-ai/pkg-eslint-config](https://github.com/workinprogress-ai/pkg-eslint-config)

The ESLint config handles all formatting automatically!
