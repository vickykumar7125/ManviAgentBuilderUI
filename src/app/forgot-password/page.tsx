"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppLogo } from "@/components/app-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/AdobeStock_383765792.jpeg"
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
            <FieldGroup>
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-xl sm:text-2xl font-bold">Forgot password?</h1>
                <p className="text-muted-foreground text-xs sm:text-sm text-balance">
                  {sent
                    ? "If an account exists for that email, we sent a reset link."
                    : "Enter your email and we'll send you a reset link."}
                </p>
              </div>

              {sent ? (
                <div className="flex flex-col gap-4">
                  <FieldDescription className="text-center">
                    Check your inbox or{" "}
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="font-medium underline underline-offset-4"
                    >
                      try another email
                    </button>
                    .
                  </FieldDescription>
                  <Button asChild className="w-full">
                    <Link href="/">Back to sign in</Link>
                  </Button>
                  <p className="text-muted-foreground text-center text-xs">
                    Already have a reset link?{" "}
                    <Link href="/reset-password" className="font-medium underline underline-offset-4">
                      Reset password
                    </Link>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </Field>
                  <Field>
                    <Button type="submit" className="w-full">
                      Send reset link
                    </Button>
                  </Field>
                </form>
              )}

              <FieldDescription className="text-center text-xs sm:text-sm">
                <Link href="/" className="underline underline-offset-4 py-1 inline-block">
                  ← Back to sign in
                </Link>
              </FieldDescription>
            </FieldGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
