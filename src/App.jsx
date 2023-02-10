import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Sections from './components/Sections';

const sections = [1, 2, 3, 4];
const backgrounds = ["#f8e8ba", "#96c4b2", "#f39230", "#d6e3c5"];

export default function App() {

  const [active, setActive] = useState(0);
  const [pair, setPair] = useState([active])

  useEffect(() => {
    function changeBg() {
      const s = document.getElementById("sections");
      s.style.backgroundColor = backgrounds[active];
    }
    return changeBg();
  }, [active]);

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

  const previous = () => changeState(active - 1)
  const next = () => changeState(active + 1);
  const gotoPage = (i) => changeState(i);

  const navProps = {active, previous, next, sections, gotoPage};
  const sectionsProps = {sections, backgrounds};

  return (
    <div className="App">
      <Nav {...navProps} />
      <Sections {...sectionsProps} />
    </div>
  )
};

