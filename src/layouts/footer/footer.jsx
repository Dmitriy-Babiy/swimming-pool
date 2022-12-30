export default function Footer({
  corporation,
  name,
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
  hr = false,
}) {
  return (
    <footer
      className="footer"
      style={{
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
      }}>
      <div className="container-main">
        {hr
          ?
          <div style={{ marginBottom: 30 }}>
            {hr ? <hr style={{ backgroundColor: '#FFFFFF', height: 1, border: 'none', opacity: '50%' }} /> : ''}
          </div>
          :
          ''
        }
        <div className="footer-wrapper">
          <span>{corporation}</span>
          <span>{name}</span>
        </div>
      </div>
    </footer>
  )
}
