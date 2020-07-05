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
