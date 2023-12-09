'use client';

import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { isValidEmail } from '@/lib/utils';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const SUBMITTING_DELAY = 2000;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm<FormValues>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    setIsSubmitting(true);
    const submitTimeout = setTimeout(() => {
      alert('Your message has been sent successfully');
      setIsSubmitting(false);
      methods.reset();
      clearTimeout(submitTimeout);
    }, SUBMITTING_DELAY);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Input
          name="name"
          label="Name"
          placeholder="Jane Appleseed"
          disabled={isSubmitting}
          options={{ required: { value: true, message: 'This field is required' } }}
        />
        <Input
          name="email"
          label="Email Address"
          placeholder="email@example.com"
          disabled={isSubmitting}
          options={{
            required: { value: true, message: 'This field is required' },
            validate: (value) => isValidEmail(value) || 'Please use a valid email address',
          }}
        />
        <Textarea
          name="message"
          label="Message"
          placeholder="How can I help?"
          disabled={isSubmitting}
          options={{
            required: { value: true, message: 'This field is required' },
            minLength: { value: 10, message: 'The message must have at least 10 characteres' },
          }}
        />

        <Button type="submit" className="self-start" disabled={isSubmitting}>
          {!isSubmitting ? 'Send message' : 'Sending...'}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
