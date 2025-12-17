"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface AccountContextType {
  account?: UserType | null;
  loading: boolean;
  refetch: () => void;
}

const AccountContext = createContext<AccountContextType | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();
  const queryClient = useQueryClient();

  const userEmail = user?.primaryEmailAddress?.emailAddress ?? "";

  const {
    data: account,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["account", userEmail],
    queryFn: () => getUserByEmail(userEmail),
    enabled: !!userEmail,
  });

  // Load from localStorage
  if (userEmail) {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("account") : null;

    if (saved) {
      queryClient.setQueryData(["account", userEmail], JSON.parse(saved));
    }
  }

  // Save to localStorage
  if (account) {
    localStorage.setItem("account", JSON.stringify(account));
  }

  const value = useMemo(
    () => ({
      account,
      loading: isLoading,
      refetch,
    }),
    [account, isLoading, refetch],
  );

  if (!isLoaded) return null; // Clerk still initializing

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}

export function useAccount(): AccountContextType {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
}
