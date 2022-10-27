import { TabInfo, TeamColumnInfo } from './types';
import Judy from '../../shared-ui/images/meet-the-tean/judy.png'
import Dean from '../../shared-ui/images/meet-the-tean/dean.png'
import Surbhi from '../../shared-ui/images/meet-the-tean/surbhi.png'
import Mike from '../../shared-ui/images/meet-the-tean/mike.png'
import Dhivas from '../../shared-ui/images/meet-the-tean/dhivas.png'
import Lisa from '../../shared-ui/images/meet-the-tean/lisa.png'
import Sreya from '../../shared-ui/images/meet-the-tean/sreya.png'
import David from '../../shared-ui/images/meet-the-tean/david.png'
import Spencer from '../../shared-ui/images/meet-the-tean/spencer.png'
import Sarah from '../../shared-ui/images/meet-the-tean/sarah.png'
import Julie from '../../shared-ui/images/meet-the-tean/julie.png'
import Amanda from '../../shared-ui/images/meet-the-tean/amanda.png'
import Onotina from '../../shared-ui/images/meet-the-tean/onotina.png'
import Bayden from '../../shared-ui/images/meet-the-tean/bayden.png'
import Jess from '../../shared-ui/images/meet-the-tean/jess.png'
import Karyna from '../../shared-ui/images/meet-the-tean/karyna.png'
import Sanjana from '../../shared-ui/images/meet-the-tean/sanjana.png'
import Aarushi from '../../shared-ui/images/meet-the-tean/aarushi.png'
import Karen from '../../shared-ui/images/meet-the-tean/karen.png'
import Rachel from '../../shared-ui/images/meet-the-tean/rachel.png'
import Wendi from '../../shared-ui/images/meet-the-tean/wendi.png'
import Ally from '../../shared-ui/images/meet-the-tean/ally.png'
import Jasmine from '../../shared-ui/images/meet-the-tean/jasmine.png'

const homeTabInfo: TabInfo[] = [
  { name: 'About', link: '' },
  { name: 'Calendar', link: '' },
  { name: 'FAQ', link: '' },
  { name: 'Sponsors', link: '' },
  { name: 'Team', link: '' }
];

const directorsPictures: string[][] = [
  [Sreya, David]
]

const techPictures: string[][] = [
  [Judy], [Dean, Surbhi], [Mike, Dhivas], [Lisa]
]

const designPictures: string[][] = [
  [Spencer], [Sarah, Julie], [Amanda, Onotina]
]

const socialOutreachPictures: string[][] = [
  [Bayden], [Jess, Karyna], [Sanjana, Aarushi]
]

const sponsorshipPictures: string[][] = [
  [Karen], [Rachel, Wendi], [Ally, Jasmine]
]

const teamInfo: TeamColumnInfo[] = [
  { teamLabel: 'Directors', listOfPictures: directorsPictures },
  { teamLabel: 'Tech', listOfPictures: techPictures },
  { teamLabel: 'Design', listOfPictures: designPictures },
  { teamLabel: 'Social Outreach', listOfPictures: socialOutreachPictures },
  { teamLabel: 'Sponsorship', listOfPictures: sponsorshipPictures }
];



export { homeTabInfo, teamInfo };
