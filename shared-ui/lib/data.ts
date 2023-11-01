import { Person, TabInfo, Team, TeamColumnInfo } from './types';
import Aaryan from "../../shared-ui/images/meet-the-team/aaryan.png"
import Amanda from "../../shared-ui/images/meet-the-team/amanda.png";
import Alyssa from "../../shared-ui/images/meet-the-team/alyssa.png";
import Aretha from "../../shared-ui/images/meet-the-team/aretha.png";
import Audrey from "../../shared-ui/images/meet-the-team/audrey.png";
import Bayden from "../../shared-ui/images/meet-the-team/bayden.png";
import Crystal from "../../shared-ui/images/meet-the-team/crystal.png";
import Dhivas from "../../shared-ui/images/meet-the-team/dhivas.png";
import Emma from "../../shared-ui/images/meet-the-team/emma.png";
import Helen from "../../shared-ui/images/meet-the-team/helen.png";
import JessSu from "../../shared-ui/images/meet-the-team/jessSu.png";
import JessYu from "../../shared-ui/images/meet-the-team/jessYu.png";
import John from "../../shared-ui/images/meet-the-team/john.png";
import Karen from "../../shared-ui/images/meet-the-team/karen.png";
import Karyna from "../../shared-ui/images/meet-the-team/karyna.png";
import Katherine from "../../shared-ui/images/meet-the-team/katherine.png";
import Lisa from "../../shared-ui/images/meet-the-team/lisa.png";
import Lucas from "../../shared-ui/images/meet-the-team/lucas.png";
import Luke from '../../shared-ui/images/meet-the-team/luke.png';
import Mandy from "../../shared-ui/images/meet-the-team/mandy.png";
import Mike from "../../shared-ui/images/meet-the-team/mike.png";
import Nelson from "../../shared-ui/images/meet-the-team/nelson.png";
import Nidhi from "../../shared-ui/images/meet-the-team/nidhi.png";
import Onotina from "../../shared-ui/images/meet-the-team/onotina.png";
import Spencer from "../../shared-ui/images/meet-the-team/spencer.png";
import Surbhi from '../../shared-ui/images/meet-the-team/surbhi.png';


const team: Team = {
  directors: 'Directors',
  tech: 'Tech',
  design: 'Design',
  socialOutreach: 'Social Outreach',
  sponsorship: 'Sponsorship'
};

const mainSiteTabInfo: TabInfo[] = [
  { name: 'About', link: '/#about' },
  { name: 'Testimonials', link: '/#testimonials' },
  { name: 'Projects', link: '/#projects' },
  { name: 'FAQ', link: '/#faq' },
  { name: 'Sponsors', link: '/#sponsors' },
  { name: 'Team', link: '/#team' },
  { name: 'Sponsor Us', link: 'https://drive.google.com/file/d/17hO3lgm_XYCrxd066B-AXIfq8gBnu8aE/view', newTab: true },
  { name: 'Apply', link: 'https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431', newTab: true },
];

const mainSiteTabInfoFooter: TabInfo[] = [
  { name: 'About', link: '/#about' },
  { name: 'Stories', link: '/#stories' },
  { name: 'COVID safety', link: '/#covid-safety' },
  { name: 'FAQ', link: '/#faq' },
  { name: 'Sponsors', link: '/#sponsors' },
];

const mainSiteTabInfoFooterSecondary: TabInfo[] = [
  { name: 'Event archive', link: '/#event-archive' },
  { name: 'Project gallery', link: '/#project-gallery' },
  { name: 'Contact us', link: '/#contact-us' },
];

const surbhi: Person = {
  picture: Surbhi,
  name: 'Surbhi Gulati',
  year: '4th',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/surbhigulati/',
};

const mike: Person = {
  picture: Mike,
  name: 'Mike Mundia',
  year: '3rd',
  major: 'CS + Theater',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/michael-mundia/'
};

const dhivas: Person = {
  picture: Dhivas,
  name: 'Dhivas Sugumar',
  year: '4th',
  major: 'CS',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/dhivas-sugumar/'
};

const lisa: Person = {
  picture: Lisa,
  name: 'Lisa Jiang',
  year: '3rd',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/haiyijiang/'
};

const spencer: Person = {
  picture: Spencer,
  name: 'Spencer Shao',
  year: '4th',
  major: 'CS + Music Tech',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/spencer-shao/'
};

const amanda: Person = {
  picture: Amanda,
  name: 'Amanda Lee',
  year: '3rd',
  major: 'CS + Design',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/amandayookyunglee/'
};

const onotina: Person = {
  picture: Onotina,
  name: 'Onotina Imoudu',
  year: '3rd',
  major: 'CS + Business',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/onotina-imoudu/'
};

const bayden: Person = {
  picture: Bayden,
  name: 'Bayden Ibrahim',
  year: '5th',
  major: 'CS + Cogn Psych',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/bayden/'
};

const jessSu: Person = {
  picture: JessSu,
  name: 'Jessica Su',
  year: '4th',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/jesssu/'
};

const karyna: Person = {
  picture: Karyna,
  name: 'Karyna Yen',
  year: '3rd',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/karynayen/'
};

const karen: Person = {
  picture: Karen,
  name: 'Karen Li',
  year: '4th',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/karen-x-li/'
};

// NEW MEMBERS

const nelson: Person = {
  picture: Nelson,
  name: 'Nelson Dong',
  year: '3rd',
  major: 'CS',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/nelson-dong '
};

const lucas: Person = {
  picture: Lucas,
  name: 'Lucas Dunker',
  year: '3rd',
  major: 'CS',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/lucasdunker/'
};

const aaryan: Person = {
  picture: Aaryan,
  name: 'Aaryan Jain',
  year: '2nd',
  major: 'CS',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/aaryanja'
};

const alyssa: Person = {
  picture: Alyssa,
  name: 'Alyssa Mui',
  year: '4th',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/alyssamui'
};

const helen: Person = {
  picture: Helen,
  name: 'Helen Miao',
  year: '3rd',
  major: 'CS + Design',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/helen-miao/'
};

const jessYu: Person = {
  picture: JessYu,
  name: 'Jessica Yu',
  year: '4th',
  major: 'CS + Math',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/jessicayu62/'
};

const aretha: Person = {
  picture: Aretha,
  name: 'Aretha Chen',
  year: '3rd',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/aretha-chen'
};

const katherine: Person = {
  picture: Katherine,
  name: 'Katherine Zeng',
  year: '4th',
  major: 'CS + Business',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/k-zeng/'
};

const crystal: Person = {
  picture: Crystal,
  name: 'Crystal Zhang',
  year: '3rd',
  major: 'CS + Design',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/cryystalzhang/'
};

const mandy: Person = {
  picture: Mandy,
  name: 'Mandy Rodriques',
  year: '2nd',
  major: 'Cybersecurity',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/amanda-rodriques-725613217/'
};

const emma: Person = {
  picture: Emma,
  name: 'Emma Vonbuelow',
  year: '2nd',
  major: 'CS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/ervb/'
};

const nidhi: Person = {
  picture: Nidhi,
  name: 'Nidhi Pillai',
  year: '3rd',
  major: 'DS',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/nidhi-pillai-074a27180/'
};

const luke: Person = {
  picture: Luke,
  name: 'Luke Steimel',
  year: '3rd',
  major: 'CS',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://linkedin.com/in/luke-steimel'
};

const audrey: Person = {
  picture: Audrey,
  name: 'Audrey Wong',
  year: '2nd',
  major: 'CS and Businss',
  pronouns: 'pronouns: she/her',
  linkedIn: 'https://www.linkedin.com/in/wong-audrey/'
};

const john: Person = {
  picture: John,
  name: 'John Sargent',
  year: '2nd',
  major: 'CS and Business',
  pronouns: 'pronouns: he/him',
  linkedIn: 'https://www.linkedin.com/in/john--sargent/'
};




const directorsPictures: Person[][] = [[spencer, dhivas]];

const techPictures: Person[][] = [
  [mike],
  [nelson, alyssa],
  [mandy, john],
  [aaryan, katherine]
];

const designPictures: Person[][] = [
  [amanda],
  [audrey, helen],
  [aretha, onotina],
  [crystal]
];

const socialOutreachPictures: Person[][] = [
  [bayden],
  [jessYu, lucas],
  [emma, nidhi]
];

const sponsorshipPictures: Person[][] = [
  [jessSu],
  [karyna, surbhi],
  [karen, lisa],
  [luke]
];

const teamInfo: TeamColumnInfo[] = [
  { teamLabel: 'Directors', listOfPictures: directorsPictures },
  { teamLabel: 'Tech', listOfPictures: techPictures },
  { teamLabel: 'Design', listOfPictures: designPictures },
  { teamLabel: 'Social Outreach', listOfPictures: socialOutreachPictures },
  { teamLabel: 'Sponsorship', listOfPictures: sponsorshipPictures }
];

export { mainSiteTabInfo, mainSiteTabInfoFooter, mainSiteTabInfoFooterSecondary, teamInfo, team };
