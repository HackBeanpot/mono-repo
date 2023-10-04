import { Person, TabInfo, Team, TeamColumnInfo, ToolTipInfo } from './types';
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
  { name: 'Calendar', link: '/#calendar' },
  { name: 'FAQ', link: '/#faq' },
  { name: 'Sponsor Us', link: '/sponsor-us' },
  { name: 'Team', link: '/#team' }
];

const surbhiToolTip: ToolTipInfo = {
  name: 'name: Surbhi Gulati',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const surbhi: Person = {
  picture: Surbhi,
  toolTipInfo: surbhiToolTip
};

const mikeToolTip: ToolTipInfo = {
  name: 'name: Mike Mundia',
  year: 'year: 3rd',
  major: 'major: CS + Theater',
  pronouns: 'pronouns: he/him'
};

const mike: Person = {
  picture: Mike,
  toolTipInfo: mikeToolTip
};

const dhivasToolTip: ToolTipInfo = {
  name: 'name: Dhivas Sugumar',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const dhivas: Person = {
  picture: Dhivas,
  toolTipInfo: dhivasToolTip
};

const lisaToolTip: ToolTipInfo = {
  name: 'name: Lisa Jiang',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const lisa: Person = {
  picture: Lisa,
  toolTipInfo: lisaToolTip
};

const spencerToolTip: ToolTipInfo = {
  name: 'name: Spencer Shao',
  year: 'year: 4th',
  major: 'major: CS + Music Tech',
  pronouns: 'pronouns: he/him'
};

const spencer: Person = {
  picture: Spencer,
  toolTipInfo: spencerToolTip
};

const amandaToolTip: ToolTipInfo = {
  name: 'name: Amanda Lee',
  year: 'year: 3rd',
  major: 'major: CS + Design',
  pronouns: 'pronouns: she/her'
};

const amanda: Person = {
  picture: Amanda,
  toolTipInfo: amandaToolTip
};

const onotinaToolTip: ToolTipInfo = {
  name: 'name: Onotina Imoudu',
  year: 'year: 3rd',
  major: 'major: CS + Business',
  pronouns: 'pronouns: she/her'
};

const onotina: Person = {
  picture: Onotina,
  toolTipInfo: onotinaToolTip
};

const baydenToolTip: ToolTipInfo = {
  name: 'name: Bayden Ibrahim',
  year: 'year: 5th',
  major: 'major: CS + Cogn Psych',
  pronouns: 'pronouns: she/her'
};

const bayden: Person = {
  picture: Bayden,
  toolTipInfo: baydenToolTip
};

const jessSuToolTip: ToolTipInfo = {
  name: 'name: Jessica Su',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const jessSu: Person = {
  picture: JessSu,
  toolTipInfo: jessSuToolTip
};

const karynaToolTip: ToolTipInfo = {
  name: 'name: Karyna Yen',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const karyna: Person = {
  picture: Karyna,
  toolTipInfo: karynaToolTip
};

const karenToolTip: ToolTipInfo = {
  name: 'name: Karen Li',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const karen: Person = {
  picture: Karen,
  toolTipInfo: karenToolTip
};

// NEW MEMBERS

const nelsonToolTip: ToolTipInfo = {
  name: 'name: Nelson Dong',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const nelson: Person = {
  picture: Nelson,
  toolTipInfo: nelsonToolTip
};

const lucasToolTip: ToolTipInfo = {
  name: 'name: Lucas Dunker',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const lucas: Person = {
  picture: Lucas,
  toolTipInfo: lucasToolTip
};

const aaryanToolTip: ToolTipInfo = {
  name: 'name: Aaryan Jain',
  year: 'year: 2nd',
  major: 'major: CS + Econ',
  pronouns: 'pronouns: he/him'
};

const aaryan: Person = {
  picture: Aaryan,
  toolTipInfo: aaryanToolTip
};

const alyssaToolTip: ToolTipInfo = {
  name: 'name: Alyssa Mui',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const alyssa: Person = {
  picture: Alyssa,
  toolTipInfo: alyssaToolTip
};

const helenToolTip: ToolTipInfo = {
  name: 'name: Helen Miao',
  year: 'year: 3rd',
  major: 'major: CS + Design',
  pronouns: 'pronouns: she/her'
};

const helen: Person = {
  picture: Helen,
  toolTipInfo: helenToolTip
};

const jessYuToolTip: ToolTipInfo = {
  name: 'name: Jessica Yu',
  year: 'year: 4th',
  major: 'major: CS + Math',
  pronouns: 'pronouns: she/her'
};

const jessYu: Person = {
  picture: JessYu,
  toolTipInfo: jessYuToolTip
};

const arethaToolTip: ToolTipInfo = {
  name: 'name: Aretha Chen',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const aretha: Person = {
  picture: Aretha,
  toolTipInfo: arethaToolTip
};

const katherineToolTip: ToolTipInfo = {
  name: 'name: Katherine Zeng',
  year: 'year: 4th',
  major: 'major: CS + Business',
  pronouns: 'pronouns: she/her'
};

const katherine: Person = {
  picture: Katherine,
  toolTipInfo: katherineToolTip
};

const crystalToolTip: ToolTipInfo = {
  name: 'name: Crystal Zhang',
  year: 'year: 3rd',
  major: 'major: CS + Design',
  pronouns: 'pronouns: she/her'
};

const crystal: Person = {
  picture: Crystal,
  toolTipInfo: crystalToolTip
};

const mandyToolTip: ToolTipInfo = {
  name: 'name: Mandy Rodriques',
  year: 'year: 2nd',
  major: 'major: Cybersecurity',
  pronouns: 'pronouns: she/her'
};

const mandy: Person = {
  picture: Mandy,
  toolTipInfo: mandyToolTip
};

const emmaToolTip: ToolTipInfo = {
  name: 'name: Emma Vonbuelow',
  year: 'year: 2nd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const emma: Person = {
  picture: Emma,
  toolTipInfo: emmaToolTip
};

const nidhiToolTip: ToolTipInfo = {
  name: 'name: Nidhi Pillai',
  year: 'year: 3rd',
  major: 'major: DS',
  pronouns: 'pronouns: she/her'
};

const nidhi: Person = {
  picture: Nidhi,
  toolTipInfo: nidhiToolTip
};

const lukeToolTip: ToolTipInfo = {
  name: 'name: Luke Steimel',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const luke: Person = {
  picture: Luke,
  toolTipInfo: lukeToolTip
};

const audreyToolTip: ToolTipInfo = {
  name: 'name: Audrey Wong',
  year: 'year: 2nd',
  major: 'major: CS and Businss',
  pronouns: 'pronouns: she/her'
};

const audrey: Person = {
  picture: Audrey,
  toolTipInfo: audreyToolTip
};

const johnToolTip: ToolTipInfo = {
  name: 'name: John Sargent',
  year: 'year: 2nd',
  major: 'major: CS and Business',
  pronouns: 'pronouns: he/him'
};

const john: Person = {
  picture: John,
  toolTipInfo: johnToolTip
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

export { mainSiteTabInfo, teamInfo, team };
