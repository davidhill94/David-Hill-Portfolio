
import MaidenImg from '../../images/MaidenLogo.png';
import colormerize from '../../images/colormerize.png';
import cryptoLogo from '../../images/projects/cryptotracker/crypto_logo.png';
import everAferLogo from '../../images/projects/EverAfterEntertainment/eaelogo.png';
import { MaidenScorebookData } from './ProjectImageData/MaidenScorebookData';
import { ColormerizeData } from './ProjectImageData/ColormerizeData';
import { CryptoData } from './ProjectImageData/CryptoData';
import { EverAfterData } from './ProjectImageData/EverAfterData.';

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
        alt: 'Maiden Scorebook',
        info: "An interactive cricket scorebook that allows you to score games from any device!",
        data: MaidenScorebookData,
        link: "https://maidenscorebook.com"
    },
    {
        title: 'Colormerize',
        image: colormerize,
        alt: 'Colormerize',
        info: "A memory game with two modes and multiple difficulties",
        data: ColormerizeData,
        link: "https://splendorous-sundae-769eb0.netlify.app"
    },
    {
        title: 'CryptoTracker',
        image: cryptoLogo,
        alt: 'CryptoTracker',
        info: "An easy way to sort and track your favourite cryptocurrencies",
        data: CryptoData,
        link: "https://beautiful-truffle-3f4bd5.netlify.app"
    },
    {
        title: 'Ever After Entertainment',
        image: everAferLogo,
        alt: 'Ever After Entertainment',
        info: "A entertainment company for all your princess party needs",
        data: EverAfterData,
        link: "https://chimerical-semifreddo-853a59.netlify.app"
    }
];