import './sections.scss';

export default function Sections({sections}) {
  return (
    <div id="sections">
      {sections.map(k => {
        return (
          <div
            key={"section_" + k}
            data-slideId={"s_" + k}
            className="section"
            // style={{backgroundColor: backgrounds[i]}}
          >
            <div className="content">
              <div className="fixed">
                <h1>Page {k}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}