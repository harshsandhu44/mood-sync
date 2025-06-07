"use client";

import { useCustomStyles } from "@/hooks";
import { ThemeProvider } from "./theme-provider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  useCustomStyles();
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default RootProvider;
