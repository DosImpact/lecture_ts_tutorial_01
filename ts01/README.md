# TS Course BASIC

# required env

```ts
yarn add typescript
yarn add tsc-watch --dev
yarn add crypto-js
```

# basic setting

```ts
add file named tsconfig.json complie configuration to js
- include : entry point
- exclude : basic setting , exclude mega js modules file
- compliterOptions : CommonJS To ES2015,
-- sourceMap : true , how to connect between TS and JS

{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2015",
    "sourceMap": true
  },
  "include": ["index.ts"],
  "exclude": ["node_modules"]
}

```

# excution TSC

```ts
>tsc (complie and make index.js file &&& index.js.map)
```

# make scripts

```ts
  "scripts": {
    "prestart": "tsc",
    "start": "node index.js"
  }
```

# like nodemon : tsc-watch

- ./src , all TS file
- ./dist , all complied JS file
- ts-watch --onSuccess "COMMAND"

```ts
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```

```ts
{
  "name": "ts01",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\" "
  },
  "devDependencies": {
    "tsc-watch": "^4.2.9"
  },
  "dependencies": {
    "typescript": "^3.9.6"
  }
}

```

# TS -

- ?

```ts
const name = "Nicloas",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

/*
  if js it can be running with only 2 args , gender is undefined
  ? make overloading functions
 */
sayHi(name, age);

export {};
```

- arg,return type

```ts
const name = "Nicloas",
  age = 24,
  gender = "male";

const sayHi = (name: string, age: number, gender?: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

/*
    args type is not match
 */
sayHi("DOS", "444", "male");

export {};
```

- object type - interface

```ts
interface Human {
  name: string;
  age: number;
  gender: string;
}
const doyoung = {
  name: "dosimpact",
  age: 25,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

const res = sayHi(doyoung);

console.log(res);

export {};
```

- object + interface => Class
- interface is not appear JS compiled file
- but class isnt
- public and private property only exist in TS File

```ts
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const doyoung = new Human("dos", 24, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(doyoung));

export {};
```
