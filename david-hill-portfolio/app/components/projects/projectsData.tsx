import MaidenImg from '../../../public/images/MaidenLogo.png';
import MaidenIcon from '../../../public/images/cricket.png';
import HubLogo from '../../../public/images/hub_logo.png';
import HubIcon from '../../../public/images/hub.png';
import cryptoLogo from '../../../public/images/crypto_logo.png';
import CryptoIcon from '../../../public/images/crypto.png';
import MonitorrLogo from '../../../public/images/Monitorr_square.png';
import MonitorrIcon from '../../../public/images/exercise.png';
import HillsideIcon from '../../../public/images/arts.png';
import ComingSoon from '../../../public/images/coming-soon.png';

export const ProjectsData = [
    {
        title: 'Maiden Scorebook',
        image: MaidenImg,
        icon: MaidenIcon,
        alt: 'Maiden Scorebook',
        info: "An interactive cricket scorebook that allows you to score games from any device. The first project I built whilst learning React and Redux.",
        link: "https://affectionate-ardinghelli-2781d3.netlify.app/",
        github: "https://github.com/davidhill94/Maiden-Scorebook",
        tech: "HTML, Styled Components, Javascript, React, Redux"
    },
    {
        title: 'myHub',
        image: HubLogo,
        icon: HubIcon,
        alt: 'myHub',
        info: "A hub page that pulls data from multiple APIs to provide News and Weather information, as well as an in-built game center. I wanted to build a project that showcased many skills all on the same website.",
        link: "https://vocal-sopapillas-54312c.netlify.app",
        github: "https://github.com/davidhill94/HubJs",
        tech: "HTML, Styled Components, Javascript, React"
    },
    {
        title: 'CryptoTracker',
        image: cryptoLogo,
        icon: CryptoIcon,
        alt: 'CryptoTracker',
        info: "My introduction into APIs - A crypto tracker that pulls data from an API allowing you to see your favourite Cryptocurrencies, and order them in a variery of ways",
        link: "https://beautiful-truffle-3f4bd5.netlify.app",
        github: "https://github.com/davidhill94/Cryptocurrency-Dashboard",
        tech: "HTML, CSS, Javascript, React"
    },
    {
        title: 'Monitorr Exercise Tracker',
        image: MonitorrLogo,
        icon: MonitorrIcon,
        alt: 'Moniorr Exercise Tracker',
        info: "My inaugural full stack project — a dynamic exercise tracker app. Crafted with the MERN stack and stylized using Tailwind, it offers an immersive experience in tracking workouts and fitness progress.",
        link: "https://shimmering-mandazi-bf55f7.netlify.app",
        github: "https://github.com/davidhill94/Monitorr-Exercise-Tracker",
        tech: "Javascript, React, TailwindCSS, Node.js, Express.js, MongoDB"
    },
    {
        title: 'Hillside E-commerce',
        image: ComingSoon,
        icon: HillsideIcon,
        alt: 'Hillside E-commerce',
        info: "Currently crafting an SEO-friendly arts and crafts e-commerce platform with Next.js, React, and Typescript. Enhanced by Tailwind for visual appeal and powered by MongoDB and NextAuth for secure functionality. An intuitive and discoverable space for art enthusiasts to explore and acquire handcrafted treasures.",
        link: "/",
        github: "https://github.com/davidhill94/hillside-ecommerce",
        tech: "Typescript, React, TailwindCSS, Next.js, MongoDB, NextAuth"
    },
];