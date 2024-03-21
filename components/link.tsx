import { default as NextLink } from "next/link";
import { PropsWithChildren } from "react";

export const Link = ({
  href,
  title,
  content,
  children,
}: PropsWithChildren<{
  href: string;
  title: string;
  content?: string;
}>) => {
  // NextLink is better for internal routing, anchors for external.
  if (href.startsWith("/")) {
    return (
      <NextLink href={href} title={title}>
        {content && content}
        {children}
      </NextLink>
    );
  }
  return (
    <a href={href} title={title} rel="noopener noreferrer" target="_blank">
      {content && content}
      {children}
    </a>
  );
};
