import type { AnchorHTMLAttributes, ReactNode } from "react";

interface SiteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export function SiteLink({ children, href, ...props }: SiteLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      rel={isExternal ? "noreferrer noopener" : undefined}
      target={isExternal ? "_blank" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
