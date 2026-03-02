"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isFirebaseReady: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    const ready = isFirebaseConfigured();
    setIsFirebaseReady(ready);
    if (!ready) {
      setLoading(false);
      return;
    }
    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }
    // Localize Google OAuth flow to browser language (Firebase doc: auth.useDeviceLanguage())
    auth.useDeviceLanguage();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setError(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setError(null);
    const auth = getFirebaseAuth();
    if (!auth) {
      setError("Firebase is not configured. Add env variables.");
      return;
    }
    // Per Firebase doc: https://firebase.google.com/docs/auth/web/google-signin
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      const code = err && typeof err === "object" && "code" in err ? (err as { code: string }).code : "";
      const message = err instanceof Error ? err.message : "Google sign-in failed";
      if (code === "auth/account-exists-with-different-credential") {
        setError("This email is already used with another sign-in method. Sign in with that method first, or use the same method everywhere.");
      } else if (code === "auth/popup-blocked") {
        setError("Sign-in popup was blocked. Allow popups for this site and try again.");
      } else if (code === "auth/popup-closed-by-user") {
        setError(null);
        return;
      } else {
        setError(message);
      }
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Sign out failed";
      setError(message);
    }
  }, []);

  const value: AuthContextValue = {
    user,
    loading,
    error,
    signInWithGoogle,
    signOut,
    isFirebaseReady,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
