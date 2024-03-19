import { ReactNode } from "react";

export type DashboardLinkProps = { href: string; label: string; icon?: ReactNode; buttonContent?: ReactNode; onClick?: () => void };
