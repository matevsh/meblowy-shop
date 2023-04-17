import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

type Props = {
  children: ReactNode;
};

export function MantineProviderx({ children }: Props) {
  return (
    <MantineProvider withNormalizeCSS theme={{ colorScheme: "dark" }}>
      {children}
    </MantineProvider>
  );
}
