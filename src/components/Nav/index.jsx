import './nav.scss';

export default function Nav({active, previous, next, sections, gotoPage}) {
  return (
    <nav>
      <div id="arrows">
        <button 
         //</div>disabled={active === 0} 
         onClick={previous}>
          &lt;
        </button>
        <button 
         // </div>disabled={active === sections.length - 1} 
         onClick={next}>
          &gt;
        </button>
      </div>
      <div id="goto">
        {sections.map((k,i) => (
          <button
            key={"goto_" + i}
            disabled={active === i}
            onClick={() => gotoPage(i)}
          >
            {k.title}
          </button>
        ))}
      </div>
    </nav>
  )
}