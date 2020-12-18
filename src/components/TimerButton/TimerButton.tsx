import * as React from 'react';
import './TimerButton.css';
 
interface buttonProps {
    setTimerInSeconds: Function
}

function TimerButton(props: buttonProps){
    const { setTimerInSeconds } = props
    const [intervalid, setIntervalid] = React.useState<number>(0)

    const handlePlayButton = () => {
        let interval:any =  setInterval(() => {
            setTimerInSeconds((prevState: number) => 
                prevState + 1)
            }, 1000)
        
            setIntervalid(interval)
    }

    const handleStopButton = () => {
        clearInterval(intervalid)
    }

    const handleResetButton = () => {
        clearInterval(intervalid)
        setTimerInSeconds(0)
    }


    return (
            <div className="td-button">
                <button onClick={handlePlayButton}>Play</button>
                <button onClick={handleStopButton}>Stop</button>
                <button onClick={handleResetButton}>Reset</button>
            </div>
    )   
}
export default TimerButton;