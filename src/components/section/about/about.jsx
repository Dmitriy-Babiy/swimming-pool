import AboutRecord from '../../about-record/about-record'

export default function About({ title, dataAboutRecord }) {
  return (
    <section className="about">
      <div className="container-sub">
        <h2 className="title">{title}</h2>
        {dataAboutRecord.map((record) => (
          <AboutRecord key={record.id} title={record.title} text={record.text} statusRevert={record.tatusRevert} />
        ))}
      </div>
    </section>
  )
}
