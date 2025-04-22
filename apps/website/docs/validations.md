# Validation

## Overview

`dymik-core` provides robust validation utilities using libraries like `arktype` and `zod`. These utilities help ensure that form data adheres to the required structure and rules.

### Example

Using `zod` for validation:

```typescript
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

const formData = { name: 'John Doe', email: 'john.doe@example.com' };

const result = formSchema.safeParse(formData);
if (!result.success) {
  console.error(result.error);
}
```