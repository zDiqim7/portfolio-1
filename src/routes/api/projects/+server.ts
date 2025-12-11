import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const projects = [
    {
        title: 'NEON_DREAMS',
        description: 'A 3D generative art platform built with Three.js and Svelte.',
        tags: ['WebGL', 'Svelte', 'GLSL'],
        image: ''
    },
    {
        title: 'CYBER_CHAT',
        description: 'End-to-end encrypted messaging app with decentralized storage.',
        tags: ['Rust', 'WebAssembly', 'Crypto'],
        image: ''
    },
    {
        title: 'DATA_NEXUS',
        description: 'Real-time financial data visualization dashboard for crypto assets.',
        tags: ['D3.js', 'WebSocket', 'Tailwind'],
        image: ''
    },
    {
        title: 'VOID_RUNNER',
        description: 'Browser-based infinite runner game with retro synthwave aesthetic.',
        tags: ['Canvas', 'Audio API', 'Vite'],
        image: ''
    },
    {
        title: 'SYNTH_UI',
        description: 'A component library for neo-brutalist web applications.',
        tags: ['TypeScript', 'Design System', 'a11y'],
        image: ''
    },
    {
        title: 'GHOST_SHELL',
        description: 'CLI tool for automating secure environment deployments.',
        tags: ['Go', 'Docker', 'Security'],
        image: ''
    }
];

export const GET: RequestHandler = async () => {
    // Simulate DB delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return json(projects);
};
