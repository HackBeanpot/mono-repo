import { TabInfo, TeamColumnInfo } from './types';
import Judy from '../../shared-ui/images/judy-placeholder.svg'

const homeTabInfo: TabInfo[] = [
  { name: 'About', link: '' },
  { name: 'Calendar', link: '' },
  { name: 'FAQ', link: '' },
  { name: 'Sponsors', link: '' },
  { name: 'Team', link: '' }
];

const directorsPictures: string[] = [
  Judy, Judy
]

const techPictures: string[] = [
  Judy, Judy, Judy, Judy, Judy, Judy
]

const designPictures: string[] = [
  Judy, Judy, Judy, Judy, Judy
]

const socialOutreachPictures: string[] = [
  Judy, Judy, Judy, Judy, Judy
]

const sponsorshipPictures: string[] = [
  Judy, Judy, Judy, Judy, Judy
]

const teamInfo: TeamColumnInfo[] = [
  { teamLabel: 'Directors', listOfPictures: directorsPictures },
  { teamLabel: 'Tech', listOfPictures: techPictures },
  { teamLabel: 'Design', listOfPictures: designPictures },
  { teamLabel: 'Social Outreach', listOfPictures: socialOutreachPictures },
  { teamLabel: 'Sponsorship', listOfPictures: sponsorshipPictures }
];



export { homeTabInfo, teamInfo };
