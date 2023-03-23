
import './App.css';
import penguinRight from'./img/penguin.png';
import penguinLeft from'./img/penguinL.png';
import $ from 'jquery';

let penguinR = penguinRight
let penguinL = penguinLeft

export function runnerL(){
  $('#location1-runnerR').hide();
  $('#location1-runnerL').show();
};
export function runnerR(){
  $('#location1-runnerR').show();
  $('#location1-runnerL').hide();
};



function App() {
  return (
    <div className="practice2">
      <div className='location1-container'>

        <input type='radio' name='location1-slide-radio' id='slide-btn1'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn4'></input>

        <div className='location1-runner-box'>
          <img id='location1-runnerR' src={penguinR} width='200px' alt='penguin'/>
          <img id='location1-runnerL' src={penguinL} width='200px' alt='penguin' hidden/>
        </div>

        <div className='location1-slide'>

          <div className='location1-slide-ground'></div>

          <div className='location1-slide1-box'>
            {/* <label for='slide-btn4' className='left'></label> */}
            asd
            <label for='slide-btn2' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide2-box'>
            <label for='slide-btn1' className='left' onClick={runnerL} id="runner-rotateL"></label>
            asd
            <label for='slide-btn3' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide3-box'>
            <label for='slide-btn2' className='left' onClick={runnerL} id="runner-rotateL"></label>
            asd
            <label for='slide-btn4' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide4-box'>
            <label for='slide-btn3' className='left' onClick={runnerL} id="runner-rotateL"></label>
            asd
            {/* <label for='slide-btn1' className='right'></label> */}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
