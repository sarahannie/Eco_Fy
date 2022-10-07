import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Services from './Services'

function HashRouter() {
  return (
    <div>
      <Link to='services#vehicle'><Services/></Link>
    </div>
  )
}

export default HashRouter
