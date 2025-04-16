# Dymik Form

Dymik Form is a Vue 3-based project designed to provide a robust and flexible form management system. It is part of the `dymik-core` package and includes a demo application to showcase its features.

## Features

- **Dynamic Form Rendering**: Easily create and manage forms dynamically.
- **Validation Utilities**: Built-in validation using libraries like `arktype` and `zod`.
- **Directus Integration**: Seamless integration with Directus for schema management.
- **Modular Design**: Organized into reusable components, services, and models.

## Project Structure

The project is organized as follows:

```
apps/
  demo/        # Demo application showcasing Dymik Form
packages/
  dymik-core/  # Core library containing the DymikForm component and utilities
```

### Key Directories

- **apps/demo**: Contains the demo application with example usage of the Dymik Form.
- **packages/dymik-core**: Core library with reusable components, models, and utilities.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dymik-form
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the demo application:
   ```bash
   pnpm --filter demo dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Development

### Core Library

The `dymik-core` package contains the main `DymikForm` component and related utilities. To make changes:

1. Navigate to the `dymik-core` directory:
   ```bash
   cd packages/dymik-core
   ```

2. Run the build process:
   ```bash
   pnpm build
   ```

### Demo Application

The demo application is located in `apps/demo`. You can modify it to test changes to the core library.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Directus](https://directus.io/)
- [Zod](https://zod.dev/)
- [ArkType](https://arktype.io/)