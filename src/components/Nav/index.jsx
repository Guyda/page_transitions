import './nav.scss';

export default function Nav({active, previous, sections, next, gotoPage}) {
  return (
    <nav>
      <div id="arrows">
        <button 
         disabled={active === 0} 
         onClick={previous}>
          &lt;
        </button>
        <button 
         disabled={active === sections.length - 1} 
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