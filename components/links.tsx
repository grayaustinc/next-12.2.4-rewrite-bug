import { FunctionComponent, PropsWithChildren } from "react";
import Link from "next/link";

const DivLink: FunctionComponent<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  );
};

const RouteList: FunctionComponent<{ prefix: string }> = ({ prefix }) => {
  return (
    <div>
      <DivLink href={`/test/${prefix}/none/`}>
        1 - Test Static Generation without data
      </DivLink>
      <DivLink href={`/test/${prefix}/none-with-index/`}>
        2 - Test Static Generation without data (index file in same folder as
        slug folder)
      </DivLink>
      <DivLink href={`/test/${prefix}/none-with-index/1/`}>
        2.5 - Test Static Generation without data (index file in same folder as
        slug folder but href points to page 1)
      </DivLink>
      <DivLink href={`/test/${prefix}/ssg/`}>
        3 - Test Static Generation with data
      </DivLink>
      <DivLink href={`/test/${prefix}/ssr/`}>
        4 - Test Server-side Rendering
      </DivLink>
    </div>
  );
};

const Directory: FunctionComponent = () => {
  return (
    <div>
      <DivLink href="/">0 - Home</DivLink>
      <div>List of links that use a trailing slash in rewrite</div>
      <RouteList prefix="with" />
      <div>List of links that do not use a trailing slash in rewrite</div>
      <RouteList prefix="without" />
    </div>
  );
};

export default Directory;
