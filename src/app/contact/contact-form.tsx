'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { sendMessage } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, LoaderCircle } from 'lucide-react';

const initialState = {
  message: null,
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <Card className="w-full">
      <form ref={formRef} action={formAction}>
        <CardContent className="pt-6 grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
            {state.errors?.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              {state.errors?.email && (
                <p className="text-sm text-destructive">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" name="phone" type="tel" placeholder="07123 456789" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you today?"
              required
              rows={5}
            />
             {state.errors?.message && (
                <p className="text-sm text-destructive">{state.errors.message[0]}</p>
              )}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <SubmitButton />
          {state.success && state.message && (
             <Alert variant="default" className="bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800">
             <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
             <AlertTitle className="text-green-800 dark:text-green-300">Message Sent!</AlertTitle>
             <AlertDescription className="text-green-700 dark:text-green-400">
               {state.message}
             </AlertDescription>
           </Alert>
          )}
           {!state.success && state.message && (
             <Alert variant="destructive">
             <AlertTitle>Error</AlertTitle>
             <AlertDescription>
               {state.message}
             </AlertDescription>
           </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
