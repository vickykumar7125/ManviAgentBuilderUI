"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { AppLogo } from "@/components/app-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { SignupForm } from "@/components/signup-form";

const AUTH_COVER_IMAGE = "/AdobeStock_383765792.jpeg";

export default function RegisterPage() {
  const { user, signOut } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement)?.value;
    if (password !== confirmPassword) return;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    console.log({ name, email, password });
  }

  if (user) {
    return (
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="bg-muted relative hidden lg:block">
          <Image
            src={AUTH_COVER_IMAGE}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-2">
            <AppLogo />
            <ThemeToggle />
          </div>
          <div className="flex flex-1 items-center justify-center py-4 sm:py-6">
            <div className="w-full max-w-xs sm:max-w-sm text-center">
              <p className="text-muted-foreground text-sm">
                Signed in as{" "}
                <span className="font-medium text-foreground">{user.email}</span>
              </p>
              <button
                type="button"
                onClick={() => signOut()}
                className="mt-4 w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Sign out
              </button>
              <Link href="/" className="mt-4 block text-sm underline underline-offset-4">
                ← Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={AUTH_COVER_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex items-center justify-between gap-2">
          <AppLogo />
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center py-4 sm:py-6">
          <div className="w-full max-w-xs sm:max-w-sm">
            <SignupForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
