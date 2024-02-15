import { useState } from "react";

export const Welcome = () =>{
    
    const date = new Date();
    const showTime = date.getSeconds()
    const [time, setTime]=useState(0);


    const onClickHandler = () => {
        console.log(`Vrijeme: ${showTime}`);
        console.log(`Time${time}`);

        if (showTime !== time) setTime(showTime);
        if (showTime === time) setTime(showTime+1);
     

    }
    
    
    return (
            <div>
                {showTime%2==0 ? 'VOLIM TE': "NE VOLIM TE" }
                <button onClick={onClickHandler}>VOLIM ne VOLIM</button>
            </div>

    )
}