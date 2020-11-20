import {
  commonRequest,
} from '../utils/request'
import axios from 'axios'

export default {
  actions: {
    async getUserData ({dispatch}) {
      commonRequest('https://us-central1-myprofile-ljnd.cloudfunctions.net/user/MLTg975gUgPgU0L7OW4O', 'GET').then(res => {
        // alert(JSON.stringify(res))
        dispatch('setUserData', res)
      })
      // const user = await axios.get('https://us-central1-myprofile-ljnd.cloudfunctions.net/user/MLTg975gUgPgU0L7OW4O')
      // alert(JSON.stringify(user))
    },
    setUserData ({commit}, data) {
      commit('updateUserData', data)
    }
  },
  state: {
    userData: {
      fullName: 'Louie Je Decatoria',
      position: 'Mobile / Web App Developer',
      contactDetails: {
        mobile: '+63 956 566 2716',
        email: 'louie.je@gmail.com',
        linkedIn: {
          liUrl: 'https://www.linkedin.com/in/louiejedecatoria/',
          label: 'louiejedecatoria',
        },
        fullAddress: '58 L45, Las Palmas Subd., Caysio, Sta. Maria, Bulacan',
      },
      profSummary: 'A motivated app developer with strong experience on iOS App Development for 5 yrs. While on a lead financial technology company, pursuing skills to a cross platform using Web development in HTML, CSS and Javasript. With years of experience, leading a team become my proficiency which enhance my position into a full pledge team manager.',
      experience: [
        {
          year: '2019 - Present',
          posTitle: 'Sr. Frontend Developer, GCash, Globe FinTech Innovation',
          desTitle: 'Lead iOS Developer and took over frontend development team to manage. Develop iOS and H5 development task and deliverables for GCash Application',
        },
        {
          year: '2017 - 2019',
          posTitle: 'Lead iOS Software Engineer, Yondu (deployed in GCash)',
          desTitle: 'GCash Application monthly development task and projects. Development also includes cross platform via H5 development',
        },
        {
          year: '2016 - 2017',
          posTitle: 'Lead, iOS Developer, Pass It Forward (AKATEK Solutions)',
          desTitle: 'Develop philanthropic mobile app called Pass It Forward. Lone developer and manage other developer for another projects.',
        },
        {
          year: '2013 - 2016',
          posTitle: 'iOS Developer, MOKOOL Apps (Canadian based Game App)',
          desTitle: 'iOS games recreation and development. Maintainer of all games and integrate SDK specially ads.',
        },
        {
          year: '2007 - 2009',
          posTitle: 'Web Developer, MSUIIT',
          desTitle: 'Worked as a web developer using PHP as a programming language and MySQL as a database. I maintained the site for about 2 years.',
        },
      ],
      education: [
        {
          year: '2001 - 2006',
          degree: 'BS Information Technology, Business Software Development',
          school: 'Mindanao State University - Iligan Institute of Technology \nIligan City, Lanao del Norte, Northern Mindanao',
        }
      ],
    },
  },
  mutations: {
    updateUserData (state, data) {
      state.userData = data
    },
  },
}