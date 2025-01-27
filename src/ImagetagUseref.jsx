import React, { useRef } from 'react'

function ImagetagUseref() {
   const imgref=useRef()
    function changeHandler(){
        imgref.current.src="https://media.gettyimages.com/id/1465997070/photo/portrait-of-white-pomeranian-on-field-indirapuram-india.jpg?s=612x612&w=gi&k=20&c=1yY1QGs5aKrbJeV_gzDJorDCbTJM6To2_Uqyoll5Ux0="
    }
  return (
    <div>
      <img src="https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg" alt="" ref={imgref} />
      <button onClick={changeHandler}>Click</button>
    </div>
  )
}

export default ImagetagUseref
