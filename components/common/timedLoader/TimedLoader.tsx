"use client";

import { useEffect, useState } from "react";

type TimedLoaderProps = {
  children: React.ReactNode;
  ms?: number; // default 1200
  Loader: React.ComponentType;
};

export default function TimedLoader({ children, ms = 1200, Loader }: TimedLoaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), ms);
    return () => clearTimeout(t);
  }, [ms]);

  if (show) return <Loader />;
  return <>{children}</>;
}
