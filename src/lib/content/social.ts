import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';


export const socialSection: SocialSectionType = {
    socialLinks: [
    {
        icon: 'mdi:instagram',
        url: socialLinks.instagram,
    },
    {
        icon: 'lucide:linkedin',
        url: socialLinks.linkedin,
    },
    {
        icon: 'lucide:facebook',
        url: socialLinks.facebook,
    },
    ],
};
