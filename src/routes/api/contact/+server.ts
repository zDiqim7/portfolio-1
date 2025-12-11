import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Name is too short'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters')
});

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();

        // Validate input
        const result = contactSchema.safeParse(data);

        if (!result.success) {
            return json(
                {
                    success: false,
                    errors: result.error.flatten().fieldErrors
                },
                { status: 400 }
            );
        }

        // Simulate sending email / saving to DB
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Contact form submission:', result.data);

        return json({
            success: true,
            message: 'Message transmitted successfully.'
        });

    } catch (err) {
        return json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
};
