import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth-layout";
import { Chrome } from "lucide-react"; // Contoh ikon

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-3xl font-primary font-bold text-text-primary">
            Selamat Datang Kembali
          </h1>
          <p className="mt-2 text-subheadline text-text-secondary">
            Masuk untuk melanjutkan perjalanan belajarmu.
          </p>
        </div>

        {/* Form statik, tidak ada onSubmit */}
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@anda.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                Lupa password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full h-12 text-base">
            Masuk
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-text-secondary">
              Atau masuk dengan
            </span>
          </div>
        </div>

        <div>
          <Button
            variant="secondary"
            className="w-full h-12 text-base border-primary/50"
          >
            <Chrome className="mr-2 h-5 w-5" />
            Masuk dengan Google
          </Button>
        </div>

        <p className="text-center text-base text-text-secondary">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
