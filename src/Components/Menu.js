import React from "react";

const Menu = ({setStart,start,reset,setHard,setFirst,isHard, first,setTurn}) => {
    const handleStart = () =>{
        setStart(true);
        setTurn(first);
    } 

    const exit = () => {
        setStart(false);
        reset();
    }

    const startOver = () => {
        setTurn(first);
        reset();
    }

    return(
        <div>
            {start ?
                <InGame {...{exit,startOver}}/> :
                <StartMenu {...{handleStart,setHard,setFirst,isHard,first}}/>
            }
        </div>
    )

}

const InGame = ({exit,startOver}) => {
    return(
        <div className="d-flex flex-column">
            <button className="btn btn-primary my-2" onClick={startOver}>
                Start Over
            </button>
            <button className="btn btn-primary my-2" onClick={exit}>
                Exit
            </button>
        </div>
    )
}

const StartMenu = ({handleStart,setHard,setFirst,isHard,first}) => {
    const handleHard = (e) => setHard(e.target.checked);
    const handleFirst = (e) => setFirst(e.target.checked);

    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={isHard} onClick={handleHard}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Hard
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={first} onClick={handleFirst}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Go First
                </label>
            </div>
            <button className="btn btn-primary" onClick={handleStart}>
                Play
            </button>
        </>
    )
}

export default Menu;