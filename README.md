# waterfall
A simple ``try-catch`` block that allows the use of ``throw`` whilst being asynchronous.  This utilizes ``async/waterfall``.

```typescript
import waterfall from 'waterfall';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

waterfall<String>([
  async () => {
    delay(1000);

    return "Hello World!";
  },
  async (str: String) => {
    if (str)
      throw new Error("I GOT IT!");

    return "I DID NOT GET IT!";
  }
], (err, str) => {
  console.log(err, str) // "I GOT IT", null
});
```
