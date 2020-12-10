import React from 'react'
import {useSpring, animated} from 'react-spring'
import Skills2 from './Skills2'
function Qua() {
    const props = useSpring(
        {
            from: {marginLeft: -100},
            to: {marginLeft: 0} ,
        }
    )
    return (
        <div>
            <div className="Skils-class"> Skills </div>
            <Skills2/>
            
            <div className="Skils-class">
            <animated.h3 style={props}>Qualifications</animated.h3>
            <animated.h4 style={props}>Inter</animated.h4>
            <animated.h4 style={props}>Graduation</animated.h4>
            <animated.h4 style={props}>Masters</animated.h4>
            </div>
        </div>
    )
}

export default Qua
