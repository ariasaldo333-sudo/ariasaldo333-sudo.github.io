import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://ariasaldo333-sudo.github.io/',
    avatar: {
        src: avatar,
        alt: 'Aldo Arias'
    },
    title: 'Aldo Arias',
    subtitle: 'QA Engineer',
    description: 'QA Engineer passionate about software quality ',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aldo-yair-arias/'
        },
        {
            text: 'Github',
            href: 'https://github.com/ariasaldo333-sudo'
        },
      
    ],
    hero: {
        title: 'Hi Welcome to my Portfolio',
        text: "I'm **Aldo Yair Arias Torrero Becerra**, am an Electronics Engineer and have experience in the field of quality since my first course at The Mudlogging Company, where we were trained as internal auditors to obtain the ISO 9001:2008 certificate. Later, at Huawei Technology, I reinforced my knowledge and skills, overcoming cultural barriers and standardizing protocols and procedures. I worked for different telecommunications companies such as: HUAWEI, FIBERHOME, TELMEX, TELCEL, TELEFONICA, TOTALPLAY, XCIEN, NEXTEL, IUSACEL, and ALESTRA, to name a few. Later, I worked in the industrial sector for companies such as: LG, KOHLER, GÜNTNER, and LENOVO.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Aldo Arias Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
