'use client';

import { BattleProvider } from "./Battle";
import { HeroesProvider } from "./Heroes";

export function Providers({ children }) {
  return (
    <HeroesProvider>
      <BattleProvider>{children}</BattleProvider>
    </HeroesProvider>
  );
}