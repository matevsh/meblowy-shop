import { ReactNode, FC } from "react";

import { MantineProviderx } from "@/common/providers/mantine-provider";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return <MantineProviderx>{children}</MantineProviderx>;
}
