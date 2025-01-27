import React from 'react'

function TernaryOperator() {
    let age=23
  return (
    <div>
      {age ? "Eligible":"NotEligible"}
      {/* or */}
      {age ? <div>"Eligible"</div>: <div>not Eligible</div>}
    </div>
  )
}

export default TernaryOperator
