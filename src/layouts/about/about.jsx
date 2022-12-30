import AboutRecord from '../../components/about-record/about-record'
import Title from '../../components/title/title'

export default function About({ title, dataAboutRecord }) {
  return (
    <section id='about' className="about">
      <div className="container-sub">
        <Title mb={100}>{title}</Title>
        {dataAboutRecord.map((record) => (
          <AboutRecord key={record.id} title={record.title} text={record.text} statusRevert={record.tatusRevert} />
        ))}
      </div>
    </section>
  )
}
