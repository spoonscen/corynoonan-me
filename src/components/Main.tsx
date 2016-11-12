import * as React from "react";


export interface MainProps {
  readonly name: string
}

export class Main extends React.Component<MainProps, {}> {
  render() {
    return <h1>It's Alive!!</h1>;
  }
}


