import React, { Component } from "react";
import './Facilities.css';
import cor from '../data/corridor.jpg';
import ck from '../data/countrykitchen.jpg';
import gym from '../data/gym.jpg';
import laundry from '../data/laundry.jpg';
import mksp from '../data/makerspace.jpg';
import mpr from '../data/mpr.jpg';
import music from '../data/music.jpg';
import study from '../data/study.jpg';

class Facilities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='facilities-container'>
        <div className='about-title'>
          Facilities
        </div>
        <div className='f-item'>
          <img src={laundry}></img>
          <p><b>Laundry Room</b><br></br>
          <br></br>
New House's laundry room is equipped with 10 washers and 10 dryers. Each washer load and dryer load costs $1.00. You can pay either with quarters or by TechCash using the card reader machines. Our washers are industrial duty machines,so they require significantly less detergent so make sure you don't overload the machines.

          </p>
        </div>

        <div className='f-item'>
          <img src={gym}></img>
          <p><b>Gym</b><br></br>
          <br></br>
          The New House Fitness Room, located in House 4, has a variety of different weights and machines. You need your MIT ID card to get access into the room.</p>

        </div>

        <div className='f-item'>
          <img src={study}></img>
          <p><b>Computer Room</b><br></br>
          <br></br>
          Located on the first floor off the Arcade between House 2 and House 4, the athena cluster in New House is home to 8 Athena computers and one printer. PICTURES COMING SOON</p>

        </div>

        <div className='f-item'>
          <img src={ck}></img>
          <p><b>Country Kitchen</b><br></br>
          <br></br>
          The country kitchen is available for the entire new house community to use, and is located in House 2. But make sure to clean up after you're done!</p>

        </div>

        <div className='f-item'>
          <img src={cor}></img>
          <p><b>Arcade</b><br></br>
          <br></br>
          The Arcade is the main hallway on the first floor that connects all the various houses. Here, we host a variety of New House Social Events (with lots of FREE FOOD). Run into friends here!</p>

        </div>

        <div className='f-item'>
          <img src={music}></img>
          <p><b>Music Room</b><br></br>
          <br></br>
          Located on the first floor of House 6, the music room in New House has one piano and several music stands for the dorm's residents to share. YES WE HAVE PIANOS NEW PICS COMING SOON. </p>

        </div>

        <div className='f-item'>
          <img src={mpr}></img>
          <p><b>Multi-Purpose Room</b><br></br>
          <br></br>
          Located on the first floor of House 2, the all-purpose lounge in New House is open for reservations (see Reservations Calendar below) for dorm events. It also happens to be convenienty located next to the country kitchen!</p>

        </div>

        <div className='f-item'>
          <img src={mksp}></img>
          <p><b>Makerspace</b><br></br>
          <br></br>
          At MIT we LOVE to make things! The makerspace is home to all sorts of fun devices to help New Housers make whatever their heart desires. Come check it out! PICTURES COMING SOON </p>

        </div>

        <div className='text-block'></div>
        <div className='text-block'></div>
        <div className='text-block'></div>
        <div className='text-block'></div>
        <div className='text-block'></div>
        <div className='text-block'></div>
        <div className='about-title'>
          Useful Links
        </div>
        <div className='f-extra'>

          <a href="https://adminappsts.mit.edu/facilities/CreateRequest.action?sapSystemId=PS1">Request Repairs</a>
          <a href="https://teamup.com/ksi1rmkfqisd21686o">Reservation Calendar</a>


        </div>


      </div>
    );
  }
}

export default Facilities;