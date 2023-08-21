# non-maybe

Self-explanatory spec: [test.js](./test.js)

This is designed to be used with flowtype. It asserts that an object is not a maybe type.
In other words, if an object is of type `?User`, then passing that object into `nonMaybe` will assert that it is of type `User`.

It will also throw an error at runtime if the object is null or undefined.

Example:

```typescript
type User = {
  userId: string
}

async function example(userId: string): Promise<User> {
  const user = await DB.getUser(userId) // DB.getUser returns Promise<?User>
  return nonMaybe(user)
} 
```

Use version 1.*.* for commonJS. Higher versions are ESM.

MIT License