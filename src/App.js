
import './App.css';
import penguinRight from'./img/penguin.png';
import penguinLeft from'./img/penguinL.png';
import penguinsound from './sound/penguin.mp3';
import penguinjoin from './sound/join.mp3';
import bearsound from './sound/bear.mp3';
import $ from 'jquery';

let penguinR = penguinRight
let penguinL = penguinLeft
let penguinS = new Audio(penguinsound)
let penguinJ = new Audio(penguinjoin)
let BearS = new Audio(bearsound)

export function runnerL(){
  $('#location1-runnerR').hide();
  $('#location1-runnerL').show();
  penguinS.play();
};
export function runnerR(){
  $('#location1-runnerR').show();
  $('#location1-runnerL').hide();
  penguinS.play();
};
export function runnerJ(){
  setTimeout(function(){ 
    penguinJ.play();
  }, 2300);
};
export function runnerB(){
  setTimeout(function(){ 
    BearS.play();
  }, 1800);
};




function App() {
  return (
    <div className="practice2">
      <div className='location1-container'>

        <input type='radio' name='location1-slide-radio' id='slide-btn1'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3' onChange={runnerB}></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn4' onChange={runnerJ}></input>

        <div className='location1-runner-box'>
          <img id='location1-runnerR' src={penguinR} width='200px' alt='penguin'/>
          <img id='location1-runnerL' src={penguinL} width='200px' alt='penguin' hidden/>
        </div>
        
        <div className='location1-slide-iceberg3'></div>

        <div className='location1-slide'>

          <div className='location1-slide-ground'></div>

          <div className='location1-slide-cloud1'></div>
          <div className='location1-slide-cloud2'></div>
          <div className='location1-slide-cloud3'></div>
          <div className='location1-slide-cloud4'></div>
          <div className='location1-slide-cloud5'></div>
          <div className='location1-slide-cloud6'></div>
          <div className='location1-slide-cloud7'></div>

          <div className='location1-slide-iceberg1'></div>
          <div className='location1-slide-iceberg2'></div>
          <div className='location1-slide-iceberg4'></div>

          <div className='location1-slide-igloo'></div>
          <div className='location1-slide-sign'></div>
          <div className='location1-slide-iceberg5'></div>
          <div className='location1-slide-iceberg6'></div>

          <div className='location1-slide-polarbear'></div>

          <div className='location1-slide-penguin2'></div>
          <div className='location1-slide-penguin3'></div>
          <div className='location1-slide-iceberg7'></div>

          <div className='location1-slide1-box'>
            {/* <label for='slide-btn4' className='left'></label> */}
            
            <label for='slide-btn2' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide2-box'>
            <label for='slide-btn1' className='left' onClick={runnerL} id="runner-rotateL"></label>
            
            <label for='slide-btn3' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide3-box'>
            <label for='slide-btn2' className='left' onClick={runnerL} id="runner-rotateL"></label>
            
            <label for='slide-btn4' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide4-box'>
            <label for='slide-btn3' className='left' onClick={runnerL} id="runner-rotateL"></label>
            
            {/* <label for='slide-btn1' className='right'></label> */}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
