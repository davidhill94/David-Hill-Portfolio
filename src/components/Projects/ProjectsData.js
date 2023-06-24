
import MaidenImg from '../../images/MaidenLogo.png';
import MaidenIcon from '../../images/cricket.png';
import HubLogo from '../../images/hub_logo.png';
import HubIcon from '../../images/hub.png';
import cryptoLogo from '../../images/crypto_logo.png';
import CryptoIcon from '../../images/crypto.png';

export const ProjectsData = [
    {
        title: '',
        image: "",
        alt: '',
        info: ''
    },
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
    }
];