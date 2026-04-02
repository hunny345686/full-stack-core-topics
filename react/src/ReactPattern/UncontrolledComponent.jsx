import React,{useRef} from 'react'

function UncontrolledComponent() {

    const input = useRef()

    
    
  return (
    <div>
        <p>UncontrolledComponent</p>
        <input type ="text" ref={input}/>
    </div>
  )
}

export default UncontrolledComponent    