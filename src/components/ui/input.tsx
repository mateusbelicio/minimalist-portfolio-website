'use client';

import { useId } from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  options?: RegisterOptions<FieldValues, string> | undefined;
};

const Input = ({ label, name, className, type, options, ...props }: InputProps) => {
  const id = useId();
  const methods = useFormContext();

  const { getFieldState, formState } = methods;
  const fieldState = getFieldState(name, formState);

  const formItemId = `${id}-form-item`;
  const formMessageId = `${id}-form-item-message`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={formItemId} className="label capitalize">
        {label}
      </label>
      <input
        id={formItemId}
        type={type}
        aria-errormessage={formMessageId}
        aria-invalid={!!fieldState.error}
        className={twMerge(
          'bg-input px-4 py-2 text-sm leading-8 text-foreground outline-none outline-1 outline-offset-0 placeholder:text-foreground/40 focus-visible:outline-primary aria-[invalid=true]:outline-destructive aria-[invalid=true]:focus-visible:outline-destructive',
          className
        )}
        {...props}
        {...methods.register(name, options)}
      />
      {!!fieldState.error ? (
        <span
          id={formMessageId}
          className="-mt-1 text-[0.625rem] font-bold italic leading-3 text-destructive"
        >
          {String(fieldState.error.message) || 'invalid'}
        </span>
      ) : null}
    </div>
  );
};

export { Input };
