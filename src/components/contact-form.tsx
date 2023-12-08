'use client';

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

const ContactForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    alert('Your message has been sent successfully');
    methods.reset();
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
          options={{ required: { value: true, message: 'This field is required' } }}
        />
        <Input
          name="email"
          label="Email Address"
          placeholder="email@example.com"
          options={{
            required: { value: true, message: 'This field is required' },
            validate: (value) => isValidEmail(value) || 'Please use a valid email address',
          }}
        />
        <Textarea
          name="message"
          label="Message"
          placeholder="How can I help?"
          options={{
            required: { value: true, message: 'This field is required' },
            minLength: { value: 10, message: 'The message must have at least 10 characteres' },
          }}
        />

        <Button type="submit" className="self-start">
          Send message
        </Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
