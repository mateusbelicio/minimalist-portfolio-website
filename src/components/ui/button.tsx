import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'cva';
import { twMerge } from 'tailwind-merge';

import Icons, { type IconsName } from '../icons';

const buttonVariants = cva(
  'group/btn label-upper select-none inline-flex h-12 items-center gap-9 px-[2.375rem] text-center transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-secondary text-secondary-foreground [&:not(:disabled)]:hover:bg-primary disabled:bg-muted disabled:cursor-not-allowed focus-visible:outline-1 focus-visible:bg-primary outline-none focus-visible:outline-primary',
        secondary:
          'border border-foreground bg-background text-foreground [&:not(:disabled)]:hover:bg-foreground [&:not(:disabled)]:hover:text-background disabled:cursor-not-allowed disabled:text-muted disabled:border-muted focus-visible:bg-foreground focus-visible:text-background outline-none focus-visible:outline-1 focus-visible:outline-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp className={twMerge(buttonVariants({ variant }), className)} {...props} ref={ref}>
        {children}
      </Comp>
    );
  }
);

type ButtonIconProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  name: IconsName;
  asChild?: boolean;
};

const ButtonIcon = ({ className, asChild, name, ...props }: ButtonIconProps) => (
  <span
    className={twMerge(
      `-ml-9 flex items-center self-stretch bg-black/10 px-4
       group-hover/btn:text-inherit group-focus-visible/btn:text-inherit [&>svg]:w-4`,
      className
    )}
    {...props}
  >
    <Icons
      className="group-hover/btn:animate-bounce group-focus-visible/btn:animate-bounce"
      name={name}
    />
  </span>
);

export { Button, ButtonIcon, buttonVariants };
