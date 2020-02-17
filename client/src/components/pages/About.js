import React, { Component } from "react";
import { Link } from "@reach/router";
import "./About.css";

import cc from '../data/chocolatecity.svg';
import des from '../data/desmond.svg';
import french from '../data/frenchhouse.svg';
import german from '../data/germanhouse.svg';
import four from '../data/housefour.svg';
import three from '../data/housethree.svg';
import two from '../data/housetwo.svg';
import ihouse from '../data/ihouse.svg';
import lacasa from '../data/lacasa.svg';

import floral from '../data/floral-divider.png';

import wes from '../data/housemaster.jpg';

import nh from '../data/newhouse.jpg';
import nhinside from '../data/newhouse-inside.jpg';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <>

    <div className='intro-block'>
        <div className='about-title'>Welcome!</div>
        <div className='text-block'>
        
New House is an undergraduate dormitory home to over 350 residents during the school year. We're on the west side of the MIT campus, also known as, building W70. The best way to think of New House is: one building, divided into six physical structures that we call "houses", shared by nine different living groups, each with their own personality. Be sure to check out the houses below!
      </div>

      <a href="https://nh.scripts.mit.edu:444/Apps/Guests/guestList/" className='intro-button'>Resident Guest List</a>      </div>

    <div>

    <img className='divider' src={floral}></img>
      <div className='background'>
        <img className='nh-image' src={nh}></img>
        <img className='nh-image' src={nhinside}></img>
      </div>
      <div className='text-block'>

      </div>
      <div className='about-title'>
        About New House
      </div>
      <div className='text-block'>
       New West Campus Houses, which opened in September 1975, consists of six physical houses, numbered (Roman and Arabic numerals are used interchangeably) sequentially from East to West. Houses II through V, Chocolate City, Russian House, French House, and German House were the charter houses of the dormitory, the first five being all-male. At the dedication in 1978, Houses II through V were named for renowned patrons of the Institute. Thereafter, houses were referred to by either number or name. In 1979, Spanish House was granted the fifth floor of House III, and in 1982 the second floor of House IV. Houses I and VI were given patron names at a function in 1983. New House contained nine individual living groups, yet was still a dormitory under one name. The independent living groups are known as the ILGs, whereas the dormitory living groups shall be known as the LGs.
      </div>
      <div className='text-block'>
    The best way to think of New House is: one building, divided into six physical structures, shared by nine different living groups. We call each of the six physical structures a "house." See the diagram below.
    </div>
    
    <div className='text-block'>
      <br></br>
      [Updated map coming soon...]
    </div>
    
    <div className='text-block'>
    All six physical houses are connected by the "arcade" on the first floor of the building. In addition, houses 1, 2, 3 and 4, and 5 and 6 are connected diagonally on the second through fifth floors. It's a bit confusing, but you can figure it out when you come visit us in the fall :).
    </div>
    <div className='text-block'>
    The rooms in these six physical houses are divided into nine living groups, which, to make things confusing on purpose, are also called "houses" (except for one) As if that's not enough, four of these houses are "numbered" houses.
    </div>
    

<div className='text-block'>
Houses
New House is split into 9 different living groups: 5 cultural houses and 4 numbered houses. Click to learn more!

</div>
<div className='house-block'>

<a href="http://ihouse.mit.edu/" className='house'>
iHouse
<img src={ihouse} width='200px' height='200px'></img>
</a>

<a href="http://ccity.mit.edu/" className='house'>
Chocolate City
<img src={cc} width='200px' height='200px'></img>
</a>

<a href="http://web.mit.edu/lmf/www/" className='house'>
French House
<img src={french} width='200px' height='200px'></img>
</a>

<a href="https://dh.scripts.mit.edu/" className='house'>
German House
<img src={german} width='200px' height='200px'></img>
</a>

<a href="http://la-casa.mit.edu/" className='house'>
Spanish House
<img src={lacasa} width='200px' height='200px'></img>
</a>

<a href="http://newhouse2.wixsite.com/nhtwo" className='house'>
House 2
<img src={two} width='200px' height='200px'></img>
</a>

<a href="http://nts.scripts.mit.edu/nh3/" className='house'>
House 3
<img src={three} width='200px' height='200px'></img>
</a>

<a href="http://nh4.mit.edu/" className='house'>
House 4
<img src={four} width='200px' height='200px'></img>
</a>
<a href="http://desmond.mit.edu/" className='house'>
House 5 (Desmond)
<img src={des} width='200px' height='200px'></img>
</a>
</div>


<img className='divider' src={floral}></img>

<div className='about-title'>
Our Head of House
</div>
  <div className='head-of-house'>
    <img src={wes}></img>
  </div>

<div className='text-block'>
You have embarked on an incredible journey, at a place we believe to be unlike any other place in the world. We congratulate you and we are so glad you have decided to make New House your home.

In addition to being the most diverse community on campus, what makes New House special is our commitment to adding value to your academic experiences through programs, fun activities, and facility improvements. It's how we come together as a community. It's the way we take pride in our environment-making it more like home. It's the way we embrace the living/learning model for residential life and implement innovative ideas like the POWER Series where residents can decompress with free massages, or NH101, a program designed to have our upperclassmen help first year students better navigate the Institute.

And we are just far enough away from the classrooms and laboratories to make you feel as if you have truly "come home" at the end of the day.

As you can see, our residence consists of nine smaller communities, The Houses of New House. As you will learn, each House has its own character and vibrancy. We encourage you to explore all of our many cultures. Venture out of your comfort zones and learn more about the many beliefs and values of your fellow residents. We value our differences and believe that by doing so, we promote understanding and a chance for world peace.

We look forward to working with you in ensuring a successful MIT experience. Let us know how we can help.

- Wes Harris
</div>

<div className='closing-block'></div>
</div>
</>
    );
  }
}

export default About;