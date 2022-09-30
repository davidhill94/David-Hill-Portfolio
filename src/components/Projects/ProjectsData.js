
import MaidenImg from '../../images/MaidenLogo.png';
import HomeTheme from '../../images/projects/maidenscorebook/home-theme.png'
import MaidenThemes from '../../images/projects/maidenscorebook/maiden-themes.png';
import colormerize from '../../images/projects/colormerize/colormerize.png';
import colormerizeLives from '../../images/projects/colormerize/colormerize_timed.png';
import colormerizeTimed from '../../images/projects/colormerize/colormerize_lives.png';
import ComingSoon from '../../images/coming-soon.png';
import { MaidenScorebookData } from './ProjectImageData/MaidenScorebookData';
import { ColormerizeData } from './ProjectImageData/ColormerizeData';

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
        carouselImageOne: HomeTheme,
        carouselImageTwo: MaidenThemes,
        data: MaidenScorebookData,
        link: "https://maidenscorebook.com"
    },
    {
        title: 'Colormerize',
        image: colormerize,
        alt: 'Colormerize',
        info: "A memory game with two modes and multiple difficulties",
        carouselImageOne: colormerizeLives,
        carouselImageTwo: colormerizeTimed,
        data: ColormerizeData,
        link: "https://splendorous-sundae-769eb0.netlify.app"
    },
    {
        title: 'Coming Soon',
        image: ComingSoon,
        alt: 'Maiden',
        info: "I'm currently building interesting projects to show off my skills",
        carouselImageOne: ComingSoon,
        carouselImageTwo: ComingSoon,
        data: MaidenScorebookData,
        link: "https://splendorous-sundae-769eb0.netlify.app"
    },
    {
        title: 'Coming Soon',
        image: ComingSoon,
        alt: 'Nebula',
        info: "I'm currently building interesting projects to show off my skills",
        carouselImageOne: ComingSoon,
        carouselImageTwo: ComingSoon,
        data: MaidenScorebookData,
        link: "https://splendorous-sundae-769eb0.netlify.app"
    
    },
    {
        title: 'Coming Soon',
        image: ComingSoon,
        alt: 'Sweat',
        info: "I'm currently building interesting projects to show off my skills",
        carouselImageOne: ComingSoon,
        carouselImageTwo: ComingSoon,
        data: MaidenScorebookData,
        link: "https://splendorous-sundae-769eb0.netlify.app"
    }
];