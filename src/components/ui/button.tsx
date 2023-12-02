import { cva, type VariantProps } from 'cva';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'text-xs transition-colors px-9 py-4 tracking-[2px] label-upper text-center',
  {
    variants: {
      variant: {
        primary: 'text-secondary-foreground bg-secondary hover:bg-primary',
        secondary:
          'text-foreground bg-background hover:bg-foreground hover:text-background border border-foreground',
      },
      defaultVariants: {
        intent: 'primary',
      },
    },
  }
);

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = ({ className, variant, children }: ButtonProps) => {
  return <button className={twMerge(buttonVariants({ variant }), className)}>{children}</button>;
};

export { Button, buttonVariants };
