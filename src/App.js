
import './App.css';
import penguinRight from'./img/penguin.png';
import penguinLeft from'./img/penguinL.png';
import penguinsound from './sound/penguin.mp3';
import penguinanswer from './sound/penguinchirp.mp3';
import whalesound from './sound/whalesound.mp3';
import whaleanswer from './sound/whaleanswer.mp3';
import bearsound from './sound/bear.mp3';
import bearanswer from './sound/bearanswer.mp3';
import penguinjoin from './sound/join.mp3';
import $ from 'jquery';

let penguinR = penguinRight
let penguinL = penguinLeft
let penguinS = new Audio(penguinsound)
let penguinA = new Audio(penguinanswer)
let whaleS = new Audio(whalesound)
let whaleA = new Audio(whaleanswer)
let bearS = new Audio(bearsound)
let bearA = new Audio(bearanswer)
let penguinJ = new Audio(penguinjoin)

export function runnerW(){
  setTimeout(function(){ 
    whaleS.play();
  }, 2600);
};
export function runnerWA(){
  setTimeout(function(){ 
    whaleA.play();
  }, 3200);
  setTimeout(function(){ 
    window.location.reload();
  }, 8000);
};
export function runnerB(){
  setTimeout(function(){ 
    bearS.play();
  }, 1800);
};
export function runnerBA(){
  setTimeout(function(){ 
    bearA.play();
  }, 3200);
  setTimeout(function(){ 
    window.location.reload();
  }, 8000);
};
export function runnerJ(){
  setTimeout(function(){ 
    penguinJ.play();
  }, 2500);
};
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
export function runnerA(){
  penguinA.play();
};






function App() {
  return (
    <div className="practice2">
      <div className='location1-container'>

        <input type='radio' name='location1-slide-radio' id='slide-btn1'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn1-2' ></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn1-3' ></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2' onChange={runnerW}></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2-1' onChange={runnerWA}></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2-2' ></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2-3' ></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2-4' ></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3' onChange={runnerB}></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3-1'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3-2'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3-3' onChange={runnerBA}></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3-4'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3-5' onChange={runnerB}></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn4' onChange={runnerJ}></input>

        <div className='location1-runner-box'>
          <img id='location1-runnerR' src={penguinR} width='200px' alt='penguin'/>
          <img id='location1-runnerL' src={penguinL} width='200px' alt='penguin' hidden/>
        </div>

        <div className='background-red'></div>
        
        <div className='location1-slide-iceberg3'></div>

        <div className='location1-slide'>

          <div className='location1-slide-sun'></div>
          <div className='location1-slide-sun2'></div>

          <div className='location1-slide-ground'></div>

          <div className='location1-slide-cloud1'></div>
          <div className='location1-slide-cloud2'></div>
          <div className='location1-slide-cloud3'></div>
          <div className='location1-slide-cloud4'></div>
          <div className='location1-slide-cloud5'></div>
          <div className='location1-slide-cloud6'></div>
          <div className='location1-slide-cloud7'></div>

          {/* 1페이지 장식 */}
          <div className='location1-slide-iceberg1'></div>
          <div className='location1-slide-iceberg2'></div>
          <div className='location1-slide-iceberg4'></div>
          <div className='location1-slide-eskimo'></div>

          {/* 2페이지 장식 */}
          <div className='location1-slide-igloo'></div>
          <div className='location1-slide-sign'></div>
          <div className='location1-slide-killerwhale'></div>
          <div className='location1-slide-iceberg5'></div>
          <div className='location1-slide-iceberg6'></div>
          <div className='location1-slide-iceberg7'></div>
          <div className='location1-slide-seal'></div>
          <div className='location1-slide-wave1'></div>
          <div className='location1-slide-wave2'></div>
          

          {/* 3페이지 장식 */}
          <div className='location1-slide-iceberg8'></div>
          <div className='location1-slide-iceberg9'></div>
          <div className='location1-slide-iceberg10'></div>
          <div className='location1-slide-dolphin1'></div>
          <div className='location1-slide-dolphin2'></div>
          <div className='location1-slide-dolphin3'></div>
          <div className='location1-slide-polarbear'></div>
          <div className='location1-slide-star1' id='location1-slide-stars'></div>
          <div className='location1-slide-star2' id='location1-slide-stars'></div>
          <div className='location1-slide-star3' id='location1-slide-stars'></div>
          <div className='location1-slide-star4' id='location1-slide-stars'></div>
          <div className='location1-slide-star5' id='location1-slide-stars'></div>
          <div className='location1-slide-star6' id='location1-slide-stars'></div>
          <div className='location1-slide-star7' id='location1-slide-stars'></div>
          <div className='location1-slide-star8' id='location1-slide-stars'></div>
          <div className='location1-slide-star9' id='location1-slide-stars'></div>
          <div className='location1-slide-star10' id='location1-slide-stars'></div>
          <div className='location1-slide-star11' id='location1-slide-stars'></div>
          <div className='location1-slide-star12' id='location1-slide-stars'></div>
          <div className='location1-slide-star13' id='location1-slide-stars'></div>
          <div className='location1-slide-star14' id='location1-slide-stars'></div>
          <div className='location1-slide-star15' id='location1-slide-stars'></div>
          <div className='location1-slide-star16' id='location1-slide-stars'></div>
          <div className='location1-slide-star17' id='location1-slide-stars'></div>
          <div className='location1-slide-star18' id='location1-slide-stars'></div>
          <div className='location1-slide-star19' id='location1-slide-stars'></div>

          {/* 4페이지 장식 */}
          <div className='location1-slide-penguin2'></div>
          <div className='location1-slide-penguin3'></div>
          <div className='location1-slide-iceberg7'></div>

          <div className='location1-slide1-box'>
            <label for='slide-btn2' className='right' onClick={runnerR} id="runner-rotateR"></label>
            <label for='slide-btn2-3' className='right-2' onClick={runnerR} id="runner-rotateR"></label>
            <label for='slide-btn2-4' className='right-3' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide2-box'>
            <label for='slide-btn1' className='left' onClick={runnerL} id="runner-rotateL"></label>

            <label for='slide-btn2-1' className='answer-1' onClick={runnerA} id="runner-answer"><h4>Get out of here you monster!</h4></label>

            <label for='slide-btn2-2' className='answer-2' onClick={runnerA} id="runner-answer"><h4>You have pretty teeth</h4></label>

            <div className='answer-whale1'><h5>I HATE YOU TOO</h5></div>
            <div className='answer-whale2'><h6>Your eyes are pretty too</h6></div>
            
            <label for='slide-btn1-2' className='left-2' onClick={runnerL} id="runner-rotateL"></label>
            <label for='slide-btn3' className='right' onClick={runnerR} id="runner-rotateR"></label>

            <label for='slide-btn1-3' className='left-3' onClick={runnerL} id="runner-rotateL"></label>
            <label for='slide-btn3-5' className='right-2' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide3-box'>
            <label for='slide-btn2-3' className='left' onClick={runnerL} id="runner-rotateL"></label>

            <label for='slide-btn3-1' className='answer-1' onClick={runnerA} id="runner-answer"><h4>I just saw a seal on the left that was more delicious than me</h4></label>
            
            <label for='slide-btn3-2' className='answer-2' onClick={runnerA} id="runner-answer"><h4>Please let me through</h4></label>

            <div className='answer-bear1'><h6>Why do you say that?</h6></div>
            <div className='answer-bear2'><h6>Of course you can go through here</h6></div>

            <label for='slide-btn3-3' className='answer-3' onClick={runnerA} id="runner-answer-2"><h4>Because you're gonna eat me</h4></label>
            
            <label for='slide-btn3-4' className='answer-4' onClick={runnerA} id="runner-answer-2"><h4>I misunderstood you were hungry</h4></label>

            <div className='answer-bear3'><h5>IF YOU SAY SO</h5></div>
            <div className='answer-bear4'><h6>Thanks for your concern</h6></div>
            
            <label for='slide-btn2-4' className='left-2' onClick={runnerL} id="runner-rotateL"></label>
            <label for='slide-btn4' className='right' onClick={runnerR} id="runner-rotateR"></label>
          </div>

          <div className='location1-slide4-box'>
            <label for='slide-btn3-5' className='left' onClick={runnerL} id="runner-rotateL"></label>
            
            {/* <label for='slide-btn1' className='right'></label> */}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
