"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollTo } from "@/hooks/useScrollTo";
import { ReactNode } from "react";

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmartLink({ href, children, className, onClick }: SmartLinkProps) {
  const scrollTo = useScrollTo();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (href.startsWith("#")) {
    if (isHomePage) {
      return (
        <button
          onClick={() => {
            scrollTo(href.replace("#", ""));
            onClick?.();
          }}
          className={className}
        >
          {children}
        </button>
      );
    }
    return (
      <Link href={`/${href}`} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("/#")) {
    if (isHomePage) {
      return (
        <button
          onClick={() => {
            scrollTo(href.replace("/#", ""));
            onClick?.();
          }}
          className={className}
        >
          {children}
        </button>
      );
    }
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
