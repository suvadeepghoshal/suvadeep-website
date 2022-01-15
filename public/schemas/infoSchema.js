import {
  AcademicCapIcon,
  BriefcaseIcon,
  IdentificationIcon
} from '@heroicons/react/outline'
export function infoSchema() {
  return {
    userInfo: {
      logo: `SG`,
      firstName: `Suvadeep`,
      lastName: `Ghoshal`,
      description: `Hello, I'm a full stack developer based in India with a passion for building digital services/stuffs. I've a knack for all thing starting from planning, designing and all the way to solve real-life problems with code. Currently, I am working at Mindtree as a Software Developer.`
    },
    errors: {
      404: {
        notFoundHeader: `Not Found!`,
        notFoundSubHeader: `Please check the URL in the address bar and try again.`
      }
    },
    personal: {
      header: `Personal Infomation`,
      subHeader: `A better way to know me`,
      personalInfo: [
        {
          key: `dob`,
          date: `1997`,
          content: `I was born in West Bengal, India in the city of Kolkata on 11th of December. So technically I'm ${
            new Date().getFullYear() - 1997
          } years old.`,
          icon: IdentificationIcon
        },
        {
          key: `college`,
          date: `2020`,
          content: `Completed Bachelors degree in Electrical Engineering from Academy of
        Technology (under MAKAUT), West Bengal, India.`,
          icon: AcademicCapIcon
        },
        {
          key: `infosys`,
          date: `2020 to 2021`,
          content: `Worked at Infosys as a Process Executive, at Infosys Pune DC, India.`,
          icon: BriefcaseIcon
        },
        {
          key: `mindtree`,
          date: `2021 to present`,
          content: `Working as Software Engineer at Mindtree Limited, at Mindtree
        Bangalore (MTW), India.`,
          icon: BriefcaseIcon
        }
      ]
    },
    hobbies: {
      header: {
        first: `I ♥ to do`,
        second: `when I'm not online`
      },
      description: `I love to play and make music, I'm a drummer and have been
      keeping it as my hobby and passion for quite some time now.
      I also enjoy solo travelling to mountains and forests. I
      love the silence mother nature provides along with its
      unimaginable beauty.`
    },
    posts: {
      header: {
        first: `Welcome to`,
        second: `POSTS!`
      },
      misc: {
        searchBarPlaceHolder: `Search Posts`,
        noPosts: `No posts found.`,
        noTags: `No tags`,
        publishedOn: `Published on`
      }
    },
    formatter: {
      date: {
        year: `numeric`,
        month: `long`,
        day: `numeric`
      },
      locale: `${navigator.language}` /* Get the viewing user's locale from the browser */
    }
  }
}
