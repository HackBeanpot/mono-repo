import { Person, TabInfo, Team, TeamColumnInfo, ToolTipInfo } from './types';
import Judy from '../../shared-ui/images/meet-the-team/judy.png';
import Dean from '../../shared-ui/images/meet-the-team/dean.png';
import Surbhi from '../../shared-ui/images/meet-the-team/surbhi.png';
import Mike from '../../shared-ui/images/meet-the-team/mike.png';
import Dhivas from '../../shared-ui/images/meet-the-team/dhivas.png';
import Lisa from '../../shared-ui/images/meet-the-team/lisa.png';
import Sreya from '../../shared-ui/images/meet-the-team/sreya.png';
import David from '../../shared-ui/images/meet-the-team/david.png';
import Spencer from '../../shared-ui/images/meet-the-team/spencer.png';
import Sarah from '../../shared-ui/images/meet-the-team/sarah.png';
import Julie from '../../shared-ui/images/meet-the-team/julie.png';
import Amanda from '../../shared-ui/images/meet-the-team/amanda.png';
import Onotina from '../../shared-ui/images/meet-the-team/onotina.png';
import Bayden from '../../shared-ui/images/meet-the-team/bayden.png';
import Jess from '../../shared-ui/images/meet-the-team/jess.png';
import Karyna from '../../shared-ui/images/meet-the-team/karyna.png';
import Sanjana from '../../shared-ui/images/meet-the-team/sanjana.png';
import Aarushi from '../../shared-ui/images/meet-the-team/aarushi.png';
import Karen from '../../shared-ui/images/meet-the-team/karen.png';
import Rachel from '../../shared-ui/images/meet-the-team/rach.png';
import Wendi from '../../shared-ui/images/meet-the-team/wendi.png';
import Ally from '../../shared-ui/images/meet-the-team/ally.png';
import Jasmine from '../../shared-ui/images/meet-the-team/jasmine.png';

const team: Team = {
  directors: 'Directors',
  tech: 'Tech',
  design: 'Design',
  socialOutreach: 'Social Outreach',
  sponsorship: 'Sponsorship'
};

const homeTabInfo: TabInfo[] = [
  { name: 'About', link: '#about' },
  { name: 'Calendar', link: '#calendar' },
  { name: 'FAQ', link: '#faq' },
  { name: 'Team', link: '#team' }
];

const sreyaToolTip: ToolTipInfo = {
  name: 'name: Sreya Katabathuni',
  year: 'year: 4th',
  major: 'major: CS + Business',
  pronouns: 'pronouns: she/her'
};

const sreya: Person = {
  picture: Sreya,
  toolTipInfo: sreyaToolTip
};

const davidToolTip: ToolTipInfo = {
  name: 'name: David Yan',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const david: Person = {
  picture: David,
  toolTipInfo: davidToolTip
};

const judyToolTip: ToolTipInfo = {
  name: 'name: Judy Zhang',
  year: 'year: 5th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const judy: Person = {
  picture: Judy,
  toolTipInfo: judyToolTip
};

const deanToolTip: ToolTipInfo = {
  name: 'name: Dean Frame',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const dean: Person = {
  picture: Dean,
  toolTipInfo: deanToolTip
};

const surbhiToolTip: ToolTipInfo = {
  name: 'name: Surbhi Gulati',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const surbhi: Person = {
  picture: Surbhi,
  toolTipInfo: surbhiToolTip
};

const mikeToolTip: ToolTipInfo = {
  name: 'name: Mike Mundia',
  year: 'year: 2nd',
  major: 'major: CS + Theater',
  pronouns: 'pronouns: he/him'
};

const mike: Person = {
  picture: Mike,
  toolTipInfo: mikeToolTip
};

const dhivasToolTip: ToolTipInfo = {
  name: 'name: Dhivas Sugumar',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: he/him'
};

const dhivas: Person = {
  picture: Dhivas,
  toolTipInfo: dhivasToolTip
};

const lisaToolTip: ToolTipInfo = {
  name: 'name: Lisa Jiang',
  year: 'year: 2nd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const lisa: Person = {
  picture: Lisa,
  toolTipInfo: lisaToolTip
};

const spencerToolTip: ToolTipInfo = {
  name: 'name: Spencor Shao',
  year: 'year: 3rd',
  major: 'major: CS + Music Tech',
  pronouns: 'pronouns: he/him'
};

const spencer: Person = {
  picture: Spencer,
  toolTipInfo: spencerToolTip
};

const julieToolTip: ToolTipInfo = {
  name: 'name: Julie Wang',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const julie: Person = {
  picture: Julie,
  toolTipInfo: julieToolTip
};

const sarahToolTip: ToolTipInfo = {
  name: 'name: Sarah Zhang',
  year: 'year: 3rd',
  major: 'major: CS + Design',
  pronouns: 'pronouns: she/her'
};

const sarah: Person = {
  picture: Sarah,
  toolTipInfo: sarahToolTip
};

const amandaToolTip: ToolTipInfo = {
  name: 'name: Amanda Lee',
  year: 'year: 2nd',
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
  year: 'year: 4th',
  major: 'major: CS + Cogn Psych',
  pronouns: 'pronouns: she/her'
};

const bayden: Person = {
  picture: Bayden,
  toolTipInfo: baydenToolTip
};

const jessToolTip: ToolTipInfo = {
  name: 'name: Jessica Su',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const jess: Person = {
  picture: Jess,
  toolTipInfo: jessToolTip
};

const karynaToolTip: ToolTipInfo = {
  name: 'name: Karyna Yen',
  year: 'year: 2nd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const karyna: Person = {
  picture: Karyna,
  toolTipInfo: karynaToolTip
};

const sanjanaToolTip: ToolTipInfo = {
  name: 'name: Sanjana Mishra',
  year: 'year: 4th',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const sanjana: Person = {
  picture: Sanjana,
  toolTipInfo: sanjanaToolTip
};

const aarushiToolTip: ToolTipInfo = {
  name: 'name: Aarushi Basmatkar',
  year: 'year: 3rd',
  major: 'major: CS + Design',
  pronouns: 'pronouns: she/her'
};

const aarushi: Person = {
  picture: Aarushi,
  toolTipInfo: aarushiToolTip
};

const karenToolTip: ToolTipInfo = {
  name: 'name: Karen Li',
  year: 'year: 3rd',
  major: 'major: CS',
  pronouns: 'pronouns: she/her'
};

const karen: Person = {
  picture: Karen,
  toolTipInfo: karenToolTip
};

const rachelToolTip: ToolTipInfo = {
  name: 'name: Rachel Li',
  year: 'year: 4th',
  major: 'major: DS',
  pronouns: 'pronouns: she/her'
};

const rachel: Person = {
  picture: Rachel,
  toolTipInfo: rachelToolTip
};

const wendiToolTip: ToolTipInfo = {
  name: 'name: Wendi Onwuakpa',
  year: 'year: 3rd',
  major: 'major: CS + Business',
  pronouns: 'pronouns: she/her'
};

const wendi: Person = {
  picture: Wendi,
  toolTipInfo: wendiToolTip
};

const allyToolTip: ToolTipInfo = {
  name: 'name: Ally Chao',
  year: 'year: 3rd',
  major: 'major: DS + Business',
  pronouns: 'pronouns: she/her'
};

const ally: Person = {
  picture: Ally,
  toolTipInfo: allyToolTip
};

const jasmineToolTip: ToolTipInfo = {
  name: 'name: Jasmine McCoy',
  year: 'year: 2nd',
  major: 'major: CS + Business',
  pronouns: 'pronouns: she/her'
};

const jasmine: Person = {
  picture: Jasmine,
  toolTipInfo: jasmineToolTip
};

const directorsPictures: Person[][] = [[sreya, david]];

const techPictures: Person[][] = [
  [judy],
  [dean, surbhi],
  [mike, dhivas],
  [lisa]
];

const designPictures: Person[][] = [
  [spencer],
  [sarah, julie],
  [amanda, onotina]
];

const socialOutreachPictures: Person[][] = [
  [bayden],
  [jess, karyna],
  [sanjana, aarushi]
];

const sponsorshipPictures: Person[][] = [
  [karen],
  [rachel, wendi],
  [ally, jasmine]
];

const teamInfo: TeamColumnInfo[] = [
  { teamLabel: 'Directors', listOfPictures: directorsPictures },
  { teamLabel: 'Tech', listOfPictures: techPictures },
  { teamLabel: 'Design', listOfPictures: designPictures },
  { teamLabel: 'Social Outreach', listOfPictures: socialOutreachPictures },
  { teamLabel: 'Sponsorship', listOfPictures: sponsorshipPictures }
];

export { homeTabInfo, teamInfo, team };
