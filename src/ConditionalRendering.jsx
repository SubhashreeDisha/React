import React from 'react'

function ConditionalRendering() {
    let age=17;
    if(age>=18){
        return <div>Eligible</div>
    }
    else{
        return <div>Not Eligible</div>
    }
}

export default ConditionalRendering
