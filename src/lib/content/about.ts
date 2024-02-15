import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here is a list of professional certificates already working with recently on the ship:',
    items: [
        'NextJs',
        'TailwindCSS',
        'ExpressJs',
        'Unit Testing',
        'TypeScript',
        'CSS Animations',
    ],
    },
    img: '/vatsal-singh.jpg',
};