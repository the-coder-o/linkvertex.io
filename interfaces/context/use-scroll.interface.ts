import { ReactNode } from "react";

export interface ScrollDetectorProps {
  children: (hasScrolled: boolean) => ReactNode;
  scrollThreshold?: number; // Make scrollThreshold optional with a default value
}
