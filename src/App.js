
import './App.css';

function App() {
  return (
    <div className="practice2">
      <div className='location1-container'>

        <input type='radio' name='location1-slide-radio' id='slide-btn1'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn2'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn3'></input>
        <input type='radio' name='location1-slide-radio' id='slide-btn4'></input>

        <div className='location1-slide'>

          <div className='location1-slide1-box'>
            {/* <label for='slide-btn4' className='left'></label> */}
            asd
            <label for='slide-btn2' className='right'></label>
          </div>

          <div className='location1-slide2-box'>
            <label for='slide-btn1' className='left'></label>
            asd
            <label for='slide-btn3' className='right'></label>
          </div>

          <div className='location1-slide3-box'>
            <label for='slide-btn2' className='left'></label>
            asd
            <label for='slide-btn4' className='right'></label>
          </div>

          <div className='location1-slide4-box'>
            <label for='slide-btn3' className='left'></label>
            asd
            {/* <label for='slide-btn1' className='right'></label> */}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
