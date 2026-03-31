import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold",
    "ring-offset-background",
    "transition-all duration-300 ease-out",
    "transform-gpu will-change-transform",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 disabled:transform-none disabled:shadow-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300",
    "motion-reduce:transform-none motion-reduce:transition-colors",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground shadow-md shadow-primary/25",
          "hover:bg-primary hover:shadow-lg hover:shadow-primary/40",
          "hover:ring-2 hover:ring-primary/30",
        ].join(" "),
        destructive: [
          "bg-destructive text-destructive-foreground shadow-md shadow-destructive/25",
          "hover:bg-destructive/92 hover:shadow-lg hover:shadow-destructive/35",
          "hover:ring-2 hover:ring-destructive/25",
        ].join(" "),
        outline: [
          "border-2 border-input bg-background/60 backdrop-blur-sm",
          "hover:border-primary/55 hover:bg-primary/[0.08] hover:text-foreground",
          "hover:shadow-md hover:shadow-primary/5",
        ].join(" "),
        secondary: [
          "bg-secondary text-secondary-foreground shadow-sm",
          "hover:bg-secondary/88 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/20",
          "hover:ring-1 hover:ring-border/80",
        ].join(" "),
        ghost: [
          "bg-transparent",
          "hover:bg-primary/12 hover:text-foreground",
          "dark:hover:bg-primary/20",
        ].join(" "),
        link: [
          "h-auto rounded-none px-0 py-0 text-primary underline-offset-[6px]",
          "bg-transparent shadow-none ring-0 hover:ring-0",
          "hover:-translate-y-0 hover:scale-100 active:scale-100",
          "hover:underline hover:text-primary/85",
          "transition-colors duration-300",
        ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8 text-base",
        icon: "h-10 w-10 rounded-lg shadow-sm hover:shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
