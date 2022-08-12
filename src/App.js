
import './App.css';
import React ,{useState, useEffect} from 'react';
import Clock from './Components/Clock'
function App() {
  const [timerDays, setTimerDays]=useState();
  const [timerHours, setTimerHours]=useState();
  const [timerMinutes, setTimerMinutes]=useState();
  const [timerSeconds, setTimerSeconds]=useState();

  let interval;

  const startTimer=()=>{
    const countDownDate= new Date ("August 28,2022").getTime();

    interval=setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const Days= Math.floor(distance/(24*60*60*1000));
      const Hours= Math.floor(distance/(24*60*60*1000)/(1000*60*60));
      const Minutes= Math.floor(distance%(60*60*1000)/(1000*60));
      const Seconds= Math.floor(distance%(60*1000)/(1000));

      if(distance<0){
        //Stop Timer
        clearInterval(interval.current);
      }
      else{
        //Update Timer
        setTimerDays(Days);
        setTimerHours(Hours);
        setTimerMinutes(Minutes);
        setTimerSeconds(Seconds);
      }
    })
  }
  useEffect(()=>{
    startTimer();
  })
  return (
    <div className="App">
      <p className='text'>Zeynep Gelinin Düğününe Son</p>
      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
      <p className='mare'>Mekan: Marehan Convention Center</p>
      
    </div>
  );
}

export default App;
