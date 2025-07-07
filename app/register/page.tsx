import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/auth-layout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-3xl font-primary font-bold text-text-primary">
            Buat Akun Baru
          </h1>
          <p className="mt-2 text-subheadline text-text-secondary">
            Mulai perjalananmu bersama ribuan talenta digital lainnya.
          </p>
        </div>

        {/* Form statik, tidak ada onSubmit */}
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullname">Nama Lengkap</Label>
            <Input id="fullname" type="text" placeholder="Nama Anda" required />
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <p className="text-xs text-text-secondary">
            Dengan mendaftar, Anda setuju dengan{" "}
            <Link href="/terms" className="underline hover:text-primary">
              Syarat & Ketentuan
            </Link>{" "}
            kami.
          </p>
          <Button type="submit" className="w-full h-12 text-base">
            Buat Akun
          </Button>
        </form>

        <p className="text-center text-base text-text-secondary">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
