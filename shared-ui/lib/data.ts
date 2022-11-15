import { TabInfo, TeamColumnInfo } from './types';
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
