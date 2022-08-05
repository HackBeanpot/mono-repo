import * as React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return <div>Welcome to our main site!!!!</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
