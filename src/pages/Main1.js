import React,{useState} from 'react'
import Trail from './Trail'
import './styles.css'
import {useSpring, animated} from 'react-spring'

function Main1() {
    const props = useSpring({
        to: {opacity: 1, color: 'red'}
    ,
        from:{opacity: 0, color: 'black'}
      })
    const [open, set] = useState(true)
    
    return (
        <>
              <Trail open={open} onClick={() => set((state) => !state)}>
                 <span>Shehla</span>
                    <span>Mushtaq</span>
              </Trail>
        </>
            )
}

export default Main1
