# TS Course BASIC

# required env

```ts
npx create-react-app . --typescript
```

# tsconfig example setting

```js
    "allowSyntheticDefaultImports":false,
import * as React from "react"; // Allow
import React from "react;   // not Allow


    "noImplicitAny": true
const plus = (a,b) => a+b // not Allow

```

# @types/

[https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)

- yarn install styled-components
- yarn install @types/styled-components

- if you install normal js library, there is no type definition. so plus install @types/<libary name> ( hope someone make typeDef)

- if somelibray does have @types/, go to tsconfig : "noImplicitAny": true
