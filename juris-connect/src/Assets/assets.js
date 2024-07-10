
import lawyer_1 from './lawyer_1.jpg'
import lawyer_2 from './lawyer_2.jpg'
import lawyer_3 from './lawyer_3.jpg'
import lawyer_4 from './lawyer_4.jpg'
import lawyer_5 from './lawyer_5.jpg'
import lawyer_6 from './lawyer_6.jpg'
import lawyer_7 from './lawyer_7.jpg'
import lawyer_8 from './lawyer_8.jpg'
import lawyer_9 from './lawyer_9.jpg'
import lawyer_10 from './lawyer_10.jpg'
import lawyer_11 from './lawyer_11.jpg'
import lawyer_12 from './lawyer_12.jpg'




import header1 from './header1.png'
import qcard1 from './qcard1.jpg'
import qcard2 from './qcard2.jpg'
import qcard3 from './qcard3.jpg'
import video1 from './video1.jpg'
import video2 from './video2.jpg'
import video3 from './video3.jpg'
import about1 from './about1.png'
import about2 from './about2.png'
import lawyers_bg from './lawyers_bg.png'
import search from './search.png'
import down_arrow from './down_arrow.png'
import verified from './verified.png'
import legalquestionimg1 from './legalquestionimg1.png'
import google from './google.png'
import JurisConnect_logo from './JurisConnect_logo.png'
import lawyer_icon from './lawyer_icon.png'
import consultation_icon from './consultation_icon.png'
import education_icon from './education_icon.png'
import question_icon from './question_icon.png'
import blogs_icon from './blogs_icon.png'
import video_icon from './video_icon.png'
import left_arrow from './left_arrow.png'
import right_arrow from './right_arrow.png'

export const assets = {
    header1,
    qcard1,
    qcard2,
    qcard3,
    video1,
    video2,
    video3,
    about1,
    about2,
    lawyers_bg,
    search,
    down_arrow,
    verified,
    legalquestionimg1,
    google,
    JurisConnect_logo,
    lawyer_icon,
    consultation_icon,
    education_icon,
    question_icon,
    blogs_icon,
    video_icon,
    right_arrow,
    left_arrow,
}



export const lawyers_details = [

    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_1,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.Kamalsiri Perera",
        lawyer_image: lawyer_2,
        lawyer_city: "Colombo",
        lawyer_expirience: 10,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English",
            medium_3: "Tamil"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2 + "|" + this.medium.medium_3;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "H.Weerasekara",
        lawyer_image: lawyer_3,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_4,
        lawyer_city: "Galle",
        lawyer_expirience: 8,
        average_rating: 5,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.S.Perera",
        lawyer_image: lawyer_5,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "Tamil"
        },
        specification: {
            specification_1: "Divoce"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },

    {
        lawyer_name: "R.P.Dasuni Dias",
        lawyer_image: lawyer_6,
        lawyer_city: "Matara",
        lawyer_expirience: 5,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.A.Silvya",
        lawyer_image: lawyer_7,
        lawyer_city: "Jaffna",
        lawyer_expirience: 12,
        average_rating: 1,
        medium: {
            medium_1: "Tamil",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.G.K.Herath",
        lawyer_image: lawyer_8,
        lawyer_city: "Gampaha",
        lawyer_expirience: 11,
        average_rating: 5,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "Kumudu Rathnayaka",
        lawyer_image: lawyer_9,
        lawyer_city: "Kandy",
        lawyer_expirience: 5,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "S.Kulasekara",
        lawyer_image: lawyer_10,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.H.Bandara Herath",
        lawyer_image: lawyer_11,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 4,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "H.K.P.Dasanayaka",
        lawyer_image: lawyer_12,
        lawyer_city: "Kandy",
        lawyer_expirience: 11,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },
    
    
    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_1,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.Kamalsiri Perera",
        lawyer_image: lawyer_2,
        lawyer_city: "Colombo",
        lawyer_expirience: 10,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English",
            medium_3: "Tamil"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2 + "|" + this.medium.medium_3;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "H.Weerasekara",
        lawyer_image: lawyer_3,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_4,
        lawyer_city: "Galle",
        lawyer_expirience: 8,
        average_rating: 5,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.S.Perera",
        lawyer_image: lawyer_5,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "Tamil"
        },
        specification: {
            specification_1: "Divoce"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },

    {
        lawyer_name: "R.P.Dasuni Dias",
        lawyer_image: lawyer_6,
        lawyer_city: "Matara",
        lawyer_expirience: 5,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.A.Silvya",
        lawyer_image: lawyer_7,
        lawyer_city: "Jaffna",
        lawyer_expirience: 12,
        average_rating: 1,
        medium: {
            medium_1: "Tamil",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.G.K.Herath",
        lawyer_image: lawyer_8,
        lawyer_city: "Gampaha",
        lawyer_expirience: 11,
        average_rating: 5,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "Kumudu Rathnayaka",
        lawyer_image: lawyer_9,
        lawyer_city: "Kandy",
        lawyer_expirience: 5,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "S.Kulasekara",
        lawyer_image: lawyer_10,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.H.Bandara Herath",
        lawyer_image: lawyer_11,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 4,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "H.K.P.Dasanayaka",
        lawyer_image: lawyer_12,
        lawyer_city: "Kandy",
        lawyer_expirience: 11,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },
]

export const qcard_details = [
    {
        topic:'Property Registration in parents name in divorce settlement',
        date: '2024.05.16',
        specification:'family',
        description:'What is the process to apply for divorce settlement, what if he has all his properties registration done in parents name?',
        lawer_image:lawyer_1,
        lawyer_name:'Mr.Kamalsiri Perera',
        answer: 'The brother / sister legally speaking the wife can not claim any divorce settlement from the properties of the parents of the husband.',

    },
    {
        topic:'Property Registration in parents name in divorce settlement',
        date: '2024.05.16',
        specification:'family',
        description:'What is the process to apply for divorce settlement, what if he has all his properties registration done in parents name?',
        lawer_image:lawyer_1,
        lawyer_name:'Mr.Kamalsiri Perera',
        answer: 'The brother / sister legally speaking the wife can not claim any divorce settlement from the properties of the parents of the husband.',

    },
    {
        topic:'Property Registration in parents name in divorce settlement',
        date: '2024.05.16',
        specification:'family',
        description:'What is the process to apply for divorce settlement, what if he has all his properties registration done in parents name?',
        lawer_image:lawyer_1,
        lawyer_name:'Mr.Kamalsiri Perera',
        answer: 'The brother / sister legally speaking the wife can not claim any divorce settlement from the properties of the parents of the husband.',

    },
]