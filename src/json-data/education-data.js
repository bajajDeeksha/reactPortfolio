/*!
 * Array of Education Data 
*/

import aecsImg from '../img/education/aecs.png';
import gitImg from '../img/education/git.png';
import tcjImg from '../img/education/tcj.png';

const EducationArr = [
    {
        schoolName: 'Atomic Energy Central School, Kaiga',
        duration: 'April 2008 - March 2010',
        course: 'Senior Secondary',
        percentage: '73.3',
        place: 'Kaiga, Karnataka, India',
        website: 'http://aecskaiga.in/',
        img: aecsImg
    },
    {
        schoolName: 'KLS Gogte Institute of Technology',
        duration: 'September 2010 - July 2014',
        course: 'Bachelors-Computer Science and Engineering',
        percentage: '63.4',
        place: 'Belgaum, Karnataka, India',
        website: 'http://www.git.edu/',
        img: gitImg
    },
    {
        schoolName: 'Tokyo Central Japanese Language School',
        duration: 'October 2014 - May 2015',
        course: 'Japanese Language',
        percentage: 'JLPT N4',
        place: 'Shinjuku, Tokyo, Japan',
        website: 'http://tcj-jp.com/jpn/',
        img: tcjImg
    }
];

export default EducationArr;
