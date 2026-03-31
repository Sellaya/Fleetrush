'use server';

import { z } from 'zod';
import {-1..+1} from 'zod';

const quoteSchema = z.object({
  pickup: z.string().min(3, { message: 'Pickup location must be at least 3 characters.' }),
  delivery: z.string().min(3, { message: 'Delivery location must be at least 3 characters.' }),
  packageDetails: z.string().min(1, { message: 'Please select a package size.' }),
  deliveryTime: z.string().min(1, { message: 'Please select a delivery urgency.' }),
  contact: z.string().min(5, { message: 'Please enter valid contact information.' }),
});

export async function getQuote(prevState: any, formData: FormData) {
  const validatedFields = quoteSchema.safeParse({
    pickup: formData.get('pickup'),
    delivery: formData.get('delivery'),
    packageDetails: formData.get('packageDetails'),
    deliveryTime: formData.get('deliveryTime'),
    contact: formData.get('contact'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid fields. Failed to get quote.',
      price: null,
    };
  }

  // In a real app, you would use an API to calculate a real price
  // based on distance, package size, etc.
  try {
    const price = (Math.random() * 100 + 20).toFixed(2);
    return {
      message: `Your instant quote is £${price}.`,
      errors: {},
      price,
    };
  } catch (e) {
    return {
      message: 'An unexpected error occurred.',
      errors: {},
      price: null,
    };
  }
}
