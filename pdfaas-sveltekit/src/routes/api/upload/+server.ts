import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    const file = url.searchParams.get('file');

    if (!file) {
        return new Response('File not found', { status: 404 });
    }

    const filePath = join('uploads', file);

    const fileBuffer = readFileSync(filePath);

    return new Response(fileBuffer, {
        headers: {
            'Content-Disposition': `attachment; filename="${file}"`,
            'Content-Type': 'application/pdf',
            'Content-Length': fileBuffer.length
        }
    });
};
