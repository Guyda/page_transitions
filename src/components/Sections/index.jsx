import './sections.scss';
import {sections, backgrounds} from '../../data';

export default function Sections() {
  return (
    <div id="sections">
      {sections.map((k,i) => {
        return (
          <div
            key={"section_" + i}
            className="section"
            style={{backgroundColor: backgrounds[i]}}
          >
            <div className="content">
              <h1>{k.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  )
}