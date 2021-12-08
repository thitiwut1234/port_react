import React from "react"

import ReactTypingEffect from 'react-typing-effect'
import './DomainHome.css'

import Social from '../../components/Social'

const DomainHome = () => {

    return (
        <div className='Home_div'>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.6435-9/118087011_605344070372171_4772870649242642678_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sPHOmRR81UAAX8UZQp2&_nc_ht=scontent.fbkk10-1.fna&oh=5421ba2655c01eeda06fbac076a497d9&oe=61D3D740" className='profilepic' />
            <Social />
            <ReactTypingEffect text={['I am Thitiwut', 'I am a Backend Developer']} speed={90} eraseDelay={250} className="typingeffect" />
            
        </div>
    )
}

export default DomainHome