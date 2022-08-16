import { GetStaticPaths, GetStaticProps } from "next";
import createTestPage from "../../../../../templates/test.[slug]";

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {}, revalidate: 30 };
};

export default createTestPage(
  "Retrieved from 'pages/test/without/ssg/[slug]/index.ts'"
);
