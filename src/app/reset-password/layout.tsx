import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password",
};

export default function ResetPasswordLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
