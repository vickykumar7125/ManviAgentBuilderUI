"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { GoogleSignInButton } from "@/components/GoogleSignInButton";

export function LoginForm({
  className,
  onSubmit,
  ...props
}: React.ComponentProps<"form"> & {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      className={cn("flex flex-col gap-4 sm:gap-6", className)}
      onSubmit={onSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-xl sm:text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-xs sm:text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            autoComplete="email"
          />
        </Field>
        <Field>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <FieldLabel htmlFor="password" className="shrink-0">Password</FieldLabel>
            <Link
              href="/forgot-password"
              className="ml-auto text-xs sm:text-sm underline-offset-4 hover:underline min-h-[44px] flex items-center"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <GoogleSignInButton />
          <FieldDescription className="text-center text-xs sm:text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 py-1"
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
