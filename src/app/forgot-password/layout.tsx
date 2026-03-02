import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Send a password reset link to your email",
};

export default function ForgotPasswordLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
