import { useState } from "react";

export default function Bstate()
{
    // // const counter = <Counter/>
    // const [showB, setShowB] = useState(true)
    const [isPlayerA, setIsPlayerA] = useState(false)

    return(
        <div className="App">
           {/* <Counter/> //Ketika Anda mencentang “Render the second counter”, Counter kedua dan state-nya diinisialisasi dari awal (score = 0) dan ditambahkan ke DOM.
           {showB && <Counter/>} */}

            { isPlayerA ? (
                <Counter key="Andi" person="Andi"/>
            ):(
                <Counter key="Saiful" person="Saiful"/>
            )}
          
           {/* <label>
            <input
                type="checkbox"
                checked={isFancy}
                onChange={e => {
                    setIsFancy(e.target.checked)
                }}
            />
            Render teh second counter
           </label> */}
            <button
                onClick={()=>{
                    setIsPlayerA(!isPlayerA);
                }}
            >
                Next Player
            </button>

        </div>
    
    );
}
function Counter({person})
{
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover){
        className += 'hover' // className = className + hover
    }
    // if (isFancy){
    //     className += 'fancy'
    // }

    return(
      <div 
        className="className"
        onPointerEnter={()=> setHover (true)}
        onPointerLeave={()=> setHover (false)}
      >
        <h1>
            {person} score {score}
        </h1>
        <button
            onClick={()=> setScore (score + 1)}
        >
         Add One
        </button>
      </div>  
    );
}