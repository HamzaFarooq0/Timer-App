import React, { useEffect, useState } from 'react';
import './App.css';

import Timer from '../Timer/Timer'
import TimerButton from '../TimerButton/TimerButton';

const App: React.FC = () => {
    const [ timerInSeconds, setTimerInSeconds ] = useState<number>(0)
    const [timerArray, setTimerArray] = useState<Array<number|string>>([])

    useEffect(() => {
        let timerArray: Array<number|string> = Timer(timerInSeconds)
        setTimerArray(timerArray)
    }, [timerInSeconds])


    return ( 
        <>
        <div className="app-container">
            <p className='timer-text'>{timerArray[0]}</p>
            <span>:</span>
            <p className='timer-text'>{timerArray[1]}</p>
            <span>:</span>
            <p className='timer-text'>{timerArray[2]}</p>
        </div>
        <div>
            <TimerButton setTimerInSeconds={setTimerInSeconds}/>
        </div>
        </>
     );
}
 
export default App;