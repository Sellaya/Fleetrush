'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendMessage(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid fields. Please check your input.',
      success: false,
    };
  }

  // In a real app, you would send this data to a CRM, email service, or database.
  // console.log('New Contact Message:', validatedFields.data);
  
  try {
    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: 'Thank you for your message! Our team will respond shortly.',
      errors: {},
      success: true,
    };
  } catch (e) {
    return {
      message: 'An unexpected error occurred. Please try again later.',
      errors: {},
      success: false,
    };
  }
}
