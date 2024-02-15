import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'MUH.IKBAL.',
    tagline: 'I am a Seaman with a COC Class 2 Competency certificate Engineer.',
    description:
    "I am an engineer. And I have experience as a leader in my department",
    specialText: 'Currently available for a job ',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};