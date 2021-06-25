import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function BreadCrumb(props) {
  console.log(props)
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {convertPathnameToText()}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(BreadCrumb)
