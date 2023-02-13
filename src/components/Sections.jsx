export default function Sections({sections}) {
  return (
    <div id="sections">
      {sections.map((k,i) => {
        return (
          <div
            key={"section_" + i}
            className="section"
            style={{backgroundColor: sections[i].bg}}
          >
            <div className="count">{i+1}</div>
            <div className="image">
              <img src={sections[i].image} />
            </div>
            <div className="content">
              <h1>{k.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  )
}