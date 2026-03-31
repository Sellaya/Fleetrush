'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { getQuote } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, LoaderCircle } from 'lucide-react';

const initialState = {
  message: null,
  errors: {},
  price: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Calculating...
        </>
      ) : (
        'Get Instant Quote'
      )}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useFormState(getQuote, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.price) {
      formRef.current?.reset();
    }
  }, [state.price]);

  return (
    <Card className="w-full">
      <form ref={formRef} action={formAction}>
        <CardContent className="pt-6 grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup">Pickup Location</Label>
              <Input
                id="pickup"
                name="pickup"
                placeholder="e.g., 10 Downing St, London"
                required
              />
              {state.errors?.pickup && (
                <p className="text-sm text-destructive">{state.errors.pickup[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="delivery">Delivery Location</Label>
              <Input
                id="delivery"
                name="delivery"
                placeholder="e.g., Buckingham Palace, London"
                required
              />
               {state.errors?.delivery && (
                <p className="text-sm text-destructive">{state.errors.delivery[0]}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="packageDetails">Package Details</Label>
            <Select name="packageDetails" required>
              <SelectTrigger id="packageDetails">
                <SelectValue placeholder="Select package size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="document">Document (Up to 1kg)</SelectItem>
                <SelectItem value="small">Small Parcel (1-5kg)</SelectItem>
                <SelectItem value="medium">Medium Parcel (5-15kg)</SelectItem>
                <SelectItem value="large">Large Parcel (15-25kg)</SelectItem>
                <SelectItem value="freight">Freight / Custom</SelectItem>
              </SelectContent>
            </Select>
             {state.errors?.packageDetails && (
                <p className="text-sm text-destructive">{state.errors.packageDetails[0]}</p>
              )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="deliveryTime">Delivery Urgency</Label>
            <Select name="deliveryTime" required>
              <SelectTrigger id="deliveryTime">
                <SelectValue placeholder="Select delivery speed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sameday">Same-Day (within hours)</SelectItem>
                <SelectItem value="nextday">Next-Day</SelectItem>
                <SelectItem value="scheduled">Scheduled (Flexible)</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.deliveryTime && (
                <p className="text-sm text-destructive">{state.errors.deliveryTime[0]}</p>
              )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Your Email or Phone</Label>
            <Input
              id="contact"
              name="contact"
              placeholder="email@example.com or 07123456789"
              required
            />
            {state.errors?.contact && (
                <p className="text-sm text-destructive">{state.errors.contact[0]}</p>
              )}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <SubmitButton />
          {state.message && !state.errors && (
             <Alert variant="default" className="bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800">
             <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
             <AlertTitle className="text-green-800 dark:text-green-300">Quote Generated!</AlertTitle>
             <AlertDescription className="text-green-700 dark:text-green-400">
               {state.message} You can now proceed to book.
             </AlertDescription>
           </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
