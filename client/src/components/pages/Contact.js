import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contact-container'>
        <div className='gov-gov-container'>
      <div className='gov-title'>
        Houseteam
      </div>
      <div className='gov-row'>
          <div>Housemaster</div>
	        <div>Wes Harris</div>
          <div><a href='mailto:weslhar@mit.edu'>weslhar@mit.edu</a></div>	
        </div>
        <div className='gov-row'>
          <div>House Manager</div>
	        <div>David Paula Nunez</div>
          <div><a href='mailto:dapaula@mit.edu'>dapaula@mit.edu</a></div>	
        </div>
        <div className='gov-row'>
          <div>Residential Life Area Director</div>
	        <div>John Ross Campbell</div>
          <div><a href='mailto:jrcamp@mit.edu'>jrcamp@mit.edu</a></div>	
        </div>
    </div>

    <div className='gov-gov-container'>
      <div className='gov-title'>
        New House General
      </div>
      <div className='gov-row'>
          <div>New House Exec</div>
          <div><a href='mailto:nh-exec@mit.edu'>nh-exec@mit.edu</a></div>	
        </div>
        <div className='gov-row'>
          <div>New House Front Desk</div>
          <div><a href='mailto:nh-desk@mit.edu'>nh-desk@mit.edu</a></div>	
        </div>
        <div className='gov-row'>
          <div>Desk Captain</div>
          <div><a href='mailto:nh-deskcaptain@mit.edu'>nh-deskcaptain@mit.edu</a></div>	
        </div>
        <div className='gov-row'>
          <div>Medlinks</div>
          <div><a href='mailto:nh-medlinks@mit.edu'>nh-medlinks@mit.edu</a></div>	
        </div>
    </div>


      </div>
    );
  }
}

export default Contact;