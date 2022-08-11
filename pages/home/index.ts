import { GetServerSideProps, GetStaticProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export { default as default } from "../../templates/home";
