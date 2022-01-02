import {
  AcademicCapIcon,
  BriefcaseIcon,
  IdentificationIcon
} from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
export function infoSchema() {
  return {
    firstName: 'Suvadeep',
    lastName: 'Ghoshal',
    description:
      "Hello, I'm a full stack developer based in India with a passion for building digital services/stuffs. I've a knack for all thing starting from planning designing all the way to solve real-life problems with code. Currently, I am working in at Mindtree as a Software Developer.",
    notFoundHeader: `Not Found!`,
    notFoundSubHeader: `The page you're looking for was not found.`,
    logo: 'SG',
    personal: {
      header: 'Personal Infomation',
      subHeader: 'A better way to know me',
      personalInfo: [
        {
          key: 'dob',
          date: '1997',
          content: `Born in Kolkata, India, so I am ${(() =>
            new Date().getFullYear() - 1997)()} years old.`,
          icon: IdentificationIcon
        },
        {
          key: 'college',
          date: '2020',
          content: `Completed Bachelors degree in Electrical Engineering from Academy of
        Technology (under MAKAUT), West Bengal, India.`,
          icon: AcademicCapIcon
        },
        {
          key: 'infosys',
          date: '2020 to 2021',
          content: `Worked at Infosys as a Process Executive, at Infosys Pune DC, India.`,
          icon: BriefcaseIcon
        },
        {
          key: 'mindtree',
          date: '2021 to present',
          content: `Working as Software Engineer at Mindtree Limited, at Mindtree
        Bangalore (MTW), India.`,
          icon: BriefcaseIcon
        }
      ]
    },
    loveTo: {
      header: 'I ♥',
      subHeader: 'Things I do when I am not online'
    }
  }
}
