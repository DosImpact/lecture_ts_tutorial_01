# TS Course BASIC

# required env

```ts
npx create-react-app . --typescript
```

# TODO GOAL && Algorithm

- [ ] make CRA --typescript
- [ ] tsconfig options
- [ ] @types/ openSource
- [ ] TS - class components
- [ ] TS - func components
- [ ] TS - event
- [ ] TS - styled

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

# TS classComponents

- 클래스 컴포넌트가 가지고 있는 state에 대해 interface type 선언

```js
import React from "react";
import styled from "styled-components";
import Number from "./Number";

interface IState {
  counter: number;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
  };
  add = (): void => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };
  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Number count={counter} />
        <button onClick={this.add}>ADD</button>
      </Container>
    );
  }
}

export default App;

const Container = styled.div``;
```

# TS functionComponents

- function 컴포넌트는, 타입으로 IProps 과 함께 지정

```ts
import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? props.theme.blueColor : "black")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
```

# TS event

```ts
import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}> {children}</form>;
```

```ts
import React from "react";
import styled from "styled-components";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
  };
  add = (): void => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };
  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Number count={counter} />
        <button onClick={this.add}>ADD</button>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={"HI"} onChange={this.onChange} />
        </Form>
      </Container>
    );
  }
}

export default App;

const Container = styled.div``;
```

# TS styled-components

```ts
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}
```

```ts
export default {
  blueColor: "red",
};
```
