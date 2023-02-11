import './sections.scss';

export default function Sections({sections, backgrounds}) {
  return (
    <div id="sections">
      {sections.map((k,i) => {
        return (
          <div
            key={"section_" + k}
            className="section"
            style={{backgroundColor: backgrounds[i]}}
          >
            <div className="content">
              <h1>Page {k}</h1>
            </div>
          </div>
        );
      })}
    </div>
  )
}