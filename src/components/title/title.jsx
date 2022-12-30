import React from 'react'

export default function Title({
  m = 0,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  p = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  children,
}) {
  return (
    <div className="title" style={{
      margin: `${m}px`,
      marginTop: `${mt}px`,
      marginRight: `${mr}px`,
      marginBottom: `${mb}px`,
      marginLeft: `${ml}px`,
      padding: `${p}px`,
      paddingTop: `${pt}px`,
      paddingRight: `${pr}px`,
      paddingBottom: `${pb}px`,
      paddingLeft: `${pl}px`,
    }}
    >
      {children}
    </div>
  )
}