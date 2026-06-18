import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@types/index';

interface AuthStore {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setTokens: (token: string, refreshToken: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      setTokens: (token, refreshToken) =>
        set({ token, refreshToken }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      logout: () =>
        set({
          user: null,
          token: null,
          refreshToken: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
