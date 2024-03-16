"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
};

export type DisclaimerContextType = {
  disclaimerContext: Boolean | undefined;
  setDisclaimerContext: Dispatch<SetStateAction<Boolean | undefined>>;
};

export const DisclaimerContext = createContext<DisclaimerContextType | null>(
  null
);

export default function DisclaimerContextTypeProvider({ children }: Props) {
  const [disclaimerContext, setDisclaimerContext] = useState<Boolean>();

  return (
    <DisclaimerContext.Provider
      value={{ disclaimerContext, setDisclaimerContext }}
    >
      {children}
    </DisclaimerContext.Provider>
  );
}
