import React from 'react'

export default function Footer({title, name}) {
  return (
    <footer className="footer">
    <div className="container-main">
      <div className="footer-wrapper">
        <span>{title}</span>
        <span>{name}</span>
      </div>
    </div>
  </footer>
  )
}
