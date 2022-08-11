import { NextPage } from "next";

import Links from "../../components/links";

export default function createTest(text: string) {
  const TestPage: NextPage = () => {
    return (
      <div>
        <div>{text}</div>
        <Links />
      </div>
    );
  };
  return TestPage;
}
