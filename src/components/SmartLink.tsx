"use client";

import Link from "next/link";
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

  // Se for âncora (#section), faz scroll suave
  if (href.startsWith("#")) {
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

  // Se for mailto ou tel
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Se for link externo
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

  // Para páginas internas, usa Link do Next.js
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
