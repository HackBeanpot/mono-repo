import { Person, TabInfo, Team, TeamColumnInfo } from './types';
import Aaryan from "../../shared-ui/images/meet-the-team/aaryan.png"
import Aretha from "../../shared-ui/images/meet-the-team/aretha.png";
import Audrey from "../../shared-ui/images/meet-the-team/audrey.png";
import Crystal from "../../shared-ui/images/meet-the-team/crystal.png";
import Emma from "../../shared-ui/images/meet-the-team/emma.png";
import John from "../../shared-ui/images/meet-the-team/johny.png";
import Katherine from "../../shared-ui/images/meet-the-team/katherine.png";
import Lisa from "../../shared-ui/images/meet-the-team/lisa.png";
import Lucas from "../../shared-ui/images/meet-the-team/lucas.png";
import Luke from '../../shared-ui/images/meet-the-team/luke.png';
import Mandy from "../../shared-ui/images/meet-the-team/mandy.png";
import Mike from "../../shared-ui/images/meet-the-team/mike.png";
import Nelson from "../../shared-ui/images/meet-the-team/nelson.png";
import NidhiP from "../../shared-ui/images/meet-the-team/nidhiP.png";
import Alex from '../../shared-ui/images/meet-the-team/alex.png';
import Alina from '../../shared-ui/images/meet-the-team/alina.png';
import Yumiko from '../../shared-ui/images/meet-the-team/yumiko.png';
import Ally from '../../shared-ui/images/meet-the-team/alexandra.png';
import Carrie from '../../shared-ui/images/meet-the-team/carrie.png';
import Zahra from '../../shared-ui/images/meet-the-team/zahra.png';
import NidhiB from '../../shared-ui/images/meet-the-team/nidhiB.png';
import Trisha from '../../shared-ui/images/meet-the-team/trisha.png';
import Megan from '../../shared-ui/images/meet-the-team/megan.png';
import Sammi from '../../shared-ui/images/meet-the-team/sammi.png';
import Amy from '../../shared-ui/images/meet-the-team/amy.png';
import Isabella from '../../shared-ui/images/meet-the-team/isabella.png';
import Harini from '../../shared-ui/images/meet-the-team/harini.png';
import Zoe from '../../shared-ui/images/meet-the-team/zoe.png';
import Annabelle from '../../shared-ui/images/meet-the-team/annabelle.png';
import Nicole from '../../shared-ui/images/meet-the-team/nicole.png';
import Swar from '../../shared-ui/images/meet-the-team/swar.png';
import Rachel from '../../shared-ui/images/meet-the-team/rachel.png';
import Tiffany from '../../shared-ui/images/meet-the-team/tiffany.png';
import Steven from '../../shared-ui/images/meet-the-team/steven.png';
import Jalen from '../../shared-ui/images/meet-the-team/jalen.png';

const team: Team = {
 directors: 'Directors',
 tech: 'Tech',
 design: 'Design',
 socialOutreach: 'Social Outreach',
 sponsorship: 'Sponsorship',
 operations: "Operations"
};


const mainSiteTabInfo: TabInfo[] = [
 { name: 'About', link: '/#about' },
 { name: 'Testimonials', link: '/#testimonials' },
 { name: 'Projects', link: '/#projects' },
 { name: 'FAQ', link: '/#faq' },
 { name: 'Sponsors', link: '/#sponsors' },
 { name: 'Team', link: '/#team' },
 { name: 'Sponsor Us', link: 'https://drive.google.com/file/d/17hO3lgm_XYCrxd066B-AXIfq8gBnu8aE/view', newTab: true },
 { name: 'Apply', link: 'https://apply.hackbeanpot.com', newTab: true },
];


const mainSiteTabInfoFooter: TabInfo[] = [
 { name: 'About', link: '/#about' },
 { name: 'Testimonials', link: '/#testimonials' },
 { name: 'Projects', link: '/#projects' },
 { name: 'FAQ', link: '/#faq' },
 { name: 'Sponsors', link: '/#sponsors' },
];


const mainSiteTabInfoFooterSecondary: TabInfo[] = [
 { name: 'Project gallery', link: 'https://projects.hackbeanpot.com' },
 { name: 'Contact us', link: 'mailto:team@hackbeanpot.com' },
];


const mike: Person = {
 picture: Mike,
 name: 'Mike Mundia',
 year: '3rd',
 major: 'CS + Theater',
 pronouns: 'pronouns: he/him',
 linkedIn: 'https://www.linkedin.com/in/michael-mundia/'
};

const lisa: Person = {
 picture: Lisa,
 name: 'Lisa Jiang',
 year: '3rd',
 major: 'CS',
 pronouns: 'pronouns: she/her',
 linkedIn: 'https://www.linkedin.com/in/haiyijiang/'
};

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

const nidhi_p: Person = {
 picture: NidhiP,
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

const alex: Person = {
 picture: Alex,
 name: 'Alexander Chen',
 year: '3rd',
 major: 'Data Science',
 pronouns: 'pronouns: he/him',
 linkedIn: 'https://www.linkedin.com/in/alexchen04/'
};

const alina: Person = {
 picture: Alina,
 name: 'Alina Gonzalez',
 year: '3rd',
 major: 'Data Science',
 pronouns: 'pronouns: she/her',
 linkedIn: 'https://linkedin.com/in/agonzalez26'
};

const yumiko: Person = {
 picture: Yumiko,
 name: 'Yumiko Chow',
 year: '2nd',
 major: 'Computer Science and Design',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/yumiko-chow/'
};

const ally: Person = {
 picture: Ally,
 name: 'Alexandra Hu',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/alexandra-hu/'
};

const carrie: Person = {
 picture: Carrie,
 name: 'Carrie Wang',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: she/her',
 linkedIn: 'https://www.linkedin.com/in/carrie-wang-/'
};

const zahra: Person = {
 picture: Zahra,
 name: 'Zahra Wibisana',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/zahra-wibisana-0b0bb2222/'
};

const nidhi_b: Person = {
 picture: NidhiB,
 name: 'Nidhi Bendre',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/nidhi-bendre-928423218/ '
};

const trisha: Person = {
 picture: Trisha,
 name: 'Trisha',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/nidhi-bendre-928423218/ '
};

const megan: Person = {
 picture: Megan,
 name: 'Megan Lai',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/meganplai/'
};

const sammi: Person = {
 picture: Sammi,
 name: 'Sammi Chen',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'www.linkedin.com/in/chensammi '
};

const ami: Person = {
 picture: Amy,
 name: 'Amy Wang',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/amy-wang-17b526248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
};


const isabella: Person = {
 picture: Isabella,
 name: 'Isabella Borda',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/isabella-borda-03537b306/'
};


const harini: Person = {
 picture: Harini,
 name: 'Harini Avula',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/harini-avula/'
};


const zoe: Person = {
 picture: Zoe,
 name: 'Zoe gao',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/zoe-gao-khoury/'
};


const annabelle: Person = {
 picture: Annabelle,
 name: 'Annabelle Chung',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/annabelle-c-2ba49327b/'
};


const nicole: Person = {
 picture: Nicole,
 name: 'Nicole Ni',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/nicole-ni-37718b307'
};


const swar: Person = {
 picture: Swar,
 name: 'Swar Kewelia',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/swar-kewalia-271a19292'
};


const rachel: Person = {
 picture: Rachel,
 name: 'Rachel Pao',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/rachelpaocyber/'
};


const tiffany: Person = {
 picture: Tiffany,
 name: 'Tiffany Zheng',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'https://www.linkedin.com/in/tiff-zheng'
};


const steven: Person = {
 picture: Steven,
 name: 'Steven',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: ''
};


const jalen: Person = {
 picture: Jalen,
 name: 'Jalen Wu',
 year: '2nd',
 major: '',
 pronouns: 'pronouns: ',
 linkedIn: 'www.linkedin.com/in/jalen-wu'
};

const directorsPictures: Person[][] = [[mike, lisa]];

const techPictures: Person[][] = [
 [john],
 [nelson, mandy],
 [aaryan, lucas],
 [crystal, aretha],
 [alex, yumiko],
 [alina]
];

const designPictures: Person[][] = [
 [audrey],
 [zahra, trisha],
 [isabella, annabelle]
];

const socialOutreachPictures: Person[][] = [
 [emma],
 [nidhi_b, megan],
 [carrie, nicole]
];

const sponsorshipPictures: Person[][] = [
 [luke],
 [nidhi_p, sammi],
 [harini, swar],
 [tiffany]
];

const operationsPictures: Person[][] = [
 [katherine],
 [ally, ami],
 [zoe, rachel],
 [steven, jalen]
]

const teamInfo: TeamColumnInfo[] = [
 { teamLabel: 'Directors', listOfPictures: directorsPictures },
 { teamLabel: 'Tech', listOfPictures: techPictures },
 { teamLabel: 'Design', listOfPictures: designPictures },
 { teamLabel: 'Social Outreach', listOfPictures: socialOutreachPictures },
 { teamLabel: 'Sponsorship', listOfPictures: sponsorshipPictures },
 {teamLabel: "Operations", listOfPictures: operationsPictures}
];


export { mainSiteTabInfo, mainSiteTabInfoFooter, mainSiteTabInfoFooterSecondary, teamInfo, team };



