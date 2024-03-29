import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Sections from './components/Sections';
import {sections} from './data';


export default function App() {

  const [active, setActive] = useState(0);
  const [pair, setPair] = useState([active])

  useEffect(() => {
    function updateAnimation(){
      const slides = document.getElementsByClassName('section');
      
      let _old = slides[pair[0]];
      if(pair.length === 1){
        _old.className = 'section default active';
      }
      
      let _new = slides[pair[1]];
      if(1 < pair.length) {
  
        if(_old){
          _old.className = pair[0] > pair[1] 
            ? 'section toResetRight' 
            : 'section toResetLeft';
        }
        if(_new){
          _new.className = pair[0] > pair[1] 
             ? 'section active toRight'
             : 'section active toLeft';
        }
       
      }
    }
    return updateAnimation();
  }, [pair])

  function changeState(a) {
    setPair([active, a]);
    setActive(a)
  }

  const previous = () => changeState(active === 0 ? sections.length - 1 : active - 1)
  const next = () => changeState(active === sections.length - 1 ? 0 : active + 1);
  const gotoPage = (i) => changeState(i);

  const navProps = {active, previous, sections, next, gotoPage};
  const sectionsProps = {sections};

  return (
    <div className="App">
      <Nav {...navProps} />
      <Sections {...sectionsProps} />
    </div>
  )
};

