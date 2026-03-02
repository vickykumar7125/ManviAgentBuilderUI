import { AppLogo } from "@/components/app-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/AdobeStock_383765792.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex items-center justify-between gap-2">
          <AppLogo href="/" />
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center py-4 sm:py-6">
          <div className="w-full max-w-xs sm:max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
