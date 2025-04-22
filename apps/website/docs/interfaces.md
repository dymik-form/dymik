# Interfaces

## Overview

`dymik-core` provides several TypeScript interfaces to ensure type safety and improve developer experience. These interfaces are located in the `interfaces` directory of the library.

### Example

```typescript
export interface FormInterface {
  id: string;
  name: string;
  fields: FieldInterface[];
}

export interface FieldInterface {
  id: string;
  label: string;
  type: string;
}
```