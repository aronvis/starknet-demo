"use client";

import { ReactNode } from "react";
import { publicProvider, StarknetConfig } from "@starknet-react/core";
import { sepolia, mainnet } from "@starknet-react/chains";
import { voyager } from "@starknet-react/core";

interface StarknetProviderProps {
  children: ReactNode;
}

export function StarknetProvider({ children }: StarknetProviderProps) {
  // Hooks and UI state
  const provider = publicProvider();
  const chains = [mainnet, sepolia];

  return (
    <StarknetConfig chains={chains} provider={provider} explorer={voyager}>
      {children}
    </StarknetConfig>
  );
}
