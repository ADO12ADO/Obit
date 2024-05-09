import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'OBIT', url: '/#experience' },
        { name: 'SWAP', url: '/#contact' },
    ],
    cta: {
        title: 'Download CV MUH.IKBAL',
        url: 'https://twitter.com/muhammad_ikbal', // Ganti dengan URL Twitter Anda
    },
};
