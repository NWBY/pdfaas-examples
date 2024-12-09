import { readdirSync } from 'node:fs';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
    const files = readdirSync('uploads');

    console.log(files);

    return new Response(JSON.stringify(files));
};
