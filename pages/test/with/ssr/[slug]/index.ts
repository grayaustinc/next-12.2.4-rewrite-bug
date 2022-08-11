import { GetServerSideProps } from "next";
import createTestPage from "../../../../../templates/test.[slug]";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default createTestPage(
  "Retrieved from 'pages/test/ssr/[slug]/index.ts'"
);
