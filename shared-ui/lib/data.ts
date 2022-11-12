import { TabInfo, TeamColumnInfo } from './types';
import Judy from '../../shared-ui/images/meet-the-team/individuals/judy.png';
import Dean from '../../shared-ui/images/meet-the-team/individuals/dean.png';
import Surbhi from '../../shared-ui/images/meet-the-team/individuals/surbhi.png';
import Mike from '../../shared-ui/images/meet-the-team/individuals/mike.png';
import Dhivas from '../../shared-ui/images/meet-the-team/individuals/dhivas.png';
import Lisa from '../../shared-ui/images/meet-the-team/individuals/lisa.png';
import Sreya from '../../shared-ui/images/meet-the-team/individuals/sreya.png';
import David from '../../shared-ui/images/meet-the-team/individuals/david.png';
import Spencer from '../../shared-ui/images/meet-the-team/individuals/spencer.png';
import Sarah from '../../shared-ui/images/meet-the-team/individuals/sarah.png';
import Julie from '../../shared-ui/images/meet-the-team/individuals/julie.png';
import Amanda from '../../shared-ui/images/meet-the-team/individuals/amanda.png';
import Onotina from '../../shared-ui/images/meet-the-team/individuals/onotina.png';
import Bayden from '../../shared-ui/images/meet-the-team/individuals/bayden.png';
import Jess from '../../shared-ui/images/meet-the-team/individuals/jess.png';
import Karyna from '../../shared-ui/images/meet-the-team/individuals/karyna.png';
import Sanjana from '../../shared-ui/images/meet-the-team/individuals/sanjana.png';
import Aarushi from '../../shared-ui/images/meet-the-team/individuals/aarushi.png';
import Karen from '../../shared-ui/images/meet-the-team/individuals/karen.png';
import Rachel from '../../shared-ui/images/meet-the-team/individuals/rach.png';
import Wendi from '../../shared-ui/images/meet-the-team/individuals/wendi.png';
import Ally from '../../shared-ui/images/meet-the-team/individuals/ally.png';
import Jasmine from '../../shared-ui/images/meet-the-team/individuals/jasmine.png';

const homeTabInfo: TabInfo[] = [
  { name: 'About', link: '#about' },
  { name: 'Calendar', link: '#calendar' },
  { name: 'FAQ', link: '#faq' },
  { name: 'Team', link: '#team' }
];

const directorsPictures: string[][] = [[Sreya, David]];

const techPictures: string[][] = [
  [Judy],
  [Dean, Surbhi],
  [Mike, Dhivas],
  [Lisa]
];

const designPictures: string[][] = [
  [Spencer],
  [Sarah, Julie],
  [Amanda, Onotina]
];

const socialOutreachPictures: string[][] = [
  [Bayden],
  [Jess, Karyna],
  [Sanjana, Aarushi]
];

const sponsorshipPictures: string[][] = [
  [Karen],
  [Rachel, Wendi],
  [Ally, Jasmine]
];

const teamInfo: TeamColumnInfo[] = [
  { teamLabel: 'Directors', listOfPictures: directorsPictures },
  { teamLabel: 'Tech', listOfPictures: techPictures },
  { teamLabel: 'Design', listOfPictures: designPictures },
  { teamLabel: 'Social Outreach', listOfPictures: socialOutreachPictures },
  { teamLabel: 'Sponsorship', listOfPictures: sponsorshipPictures }
];

export { homeTabInfo, teamInfo };
