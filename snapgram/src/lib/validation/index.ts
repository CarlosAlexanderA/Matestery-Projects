import * as z from 'zod';

export const SignUpValidation = z.object({
  name: z.string().min(2, {message: 'Too Short'}),
  username: z.string().min(2),
  email: z.string().min(2, {message: 'Too Short'}),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters.'}),
});

export const SignInValidation = z.object({
  email: z.string().min(2, {message: 'Too Short'}),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters.'}),
});
