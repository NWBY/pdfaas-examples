import type { Actions } from './$types';
import { writeFile } from 'node:fs/promises';
import { extname } from 'path';

export const actions = {
    // @ts-ignore
    default: async ({ request }) => {
        const formData = await request.formData();

        const html = formData?.get('text');

        const res = await fetch('https://pdfaas.vizalo.co/api/pdf', {
            method: 'POST',
            body: JSON.stringify({
                content: html
            })
        });

        const file = await res.arrayBuffer();

        await writeFile('uploads/pdfaas.pdf', Buffer.from(file));
        // await writeFile(filename, Buffer.from(await file?.arrayBuffer()));

        return {
            status: 200,
        };
    }
} satisfies Actions;