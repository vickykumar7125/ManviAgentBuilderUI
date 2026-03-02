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

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) return;
    setDone(true);
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
                <h1 className="text-xl sm:text-2xl font-bold">
                  {done ? "Password updated" : "Reset password"}
                </h1>
                <p className="text-muted-foreground text-xs sm:text-sm text-balance">
                  {done
                    ? "You can now sign in with your new password."
                    : "Enter your new password below."}
                </p>
              </div>

              {done ? (
                <Field>
                  <Button asChild className="w-full">
                    <Link href="/">Sign in</Link>
                  </Button>
                </Field>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <Field>
                    <FieldLabel htmlFor="password">New password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      autoComplete="new-password"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirmPassword">
                      Confirm new password
                    </FieldLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      minLength={8}
                      autoComplete="new-password"
                    />
                    {confirmPassword && password !== confirmPassword && (
                      <FieldDescription className="text-destructive text-xs">
                        Passwords do not match
                      </FieldDescription>
                    )}
                  </Field>
                  <Field>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={
                        (confirmPassword !== "" && password !== confirmPassword) ||
                        password.length < 8
                      }
                    >
                      Reset password
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
