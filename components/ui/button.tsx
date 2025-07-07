import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Varian untuk halaman publik (marketing)
        primary:
          "bg-primary text-primary-foreground font-primary border-2 border-transparent hover:bg-[#1A4B8E] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-out",

        // Varian 'outline' menggantikan 'secondary' untuk konsistensi
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",

        // Varian untuk dasbor (aplikasi)
        // Varian default yang solid untuk aksi utama di dalam aplikasi
        default: "bg-primary text-primary-foreground hover:bg-primary/90",

        // Varian tanpa background & border
        ghost: "hover:bg-primary/10 hover:text-primary",

        // Varian untuk aksi berbahaya
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        secondary:
          "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground",

        // Varian yang terlihat seperti link
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2", // Ukuran standar untuk aplikasi
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-lg font-primary", // Ukuran besar untuk CTA utama
        icon: "h-10 w-10", // Ukuran khusus untuk ikon
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
