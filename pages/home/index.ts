import { GetServerSideProps, GetStaticProps } from "next";

//Even when not SSR, the error still occurs.
export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export { default } from "../../templates/home";
