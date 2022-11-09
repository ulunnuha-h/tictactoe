import React, { useEffect, useState } from "react";
import imgo from './Assets/o.png';
import imgx from './Assets/x.png';
import imge from './Assets/e.png';
import evaluate from "./Algorithm/Evaluate";
import isFull from "./Algorithm/Finish";
import enemyMove from "./Algorithm/Enemy";
import Menu from "./Components/Menu";
import './App.css';

const App = () => {
    const [box,setBox] = useState([['','',''],['','',''],['','','']]);
    const [turn,setTurn] = useState(true);
    const [win,setWin] = useState('');
    const [start,setStart] = useState(false);
    const [isHard,setHard] = useState(true);
    const [first,setFirst] = useState(true);

    useEffect(()=>{
        if(evaluate(box) !== '') setWin(evaluate(box));
        else if(isFull(box)){
            setWin("Draw");
        }else if(!turn){
            setBox(enemyMove(box,isHard));
            setTurn(true);
        }
    },[box, turn]);

    const clicked = (x,y) => {
        if(box[x][y] == '' && start){
            let newBox = box;
            newBox[x][y] ='o';
            setTurn(false);
            setBox(newBox);
        }
    }

    const check = (i) => {
        if(i == '') return imge;
        else if(i == 'x') return imgx;
        else return imgo;
    }

    const reset = () => {
        setBox([['','',''],['','',''],['','','']]);
        setWin('');
    }

    const mappedBox = box.map((val,idx)=>{
        return <tr key={idx}>
            {
                val.map((val2,idx2) => {
                    return (
                        <td onClick={()=>clicked(idx,idx2)} key={idx2}>
                            <img src={check(val2)} className="img-fluid p-3"/>
                        </td>
                    )
                })
            }
        </tr>            
    })

    return (
        <div className="App row">
            <section className="game col-lg-8 col-12 d-flex p-0 align-items-center justify-content-center position-relative">
                <Anouncement {...{win,start}}/>
                <table>
                    <tbody>
                        {mappedBox}
                    </tbody>
                </table>
            </section>
            <section className="menu col-lg-4 col-12">
                <div className="d-flex align-items-center justify-content-center h-100">
                    <Menu {...{setStart, start, reset , setHard, setFirst , isHard, first ,setTurn}}/>
                </div>
            </section>
        </div>
    );
}

const Anouncement = ({win,start}) => {
    const winText = (res) => {
        if(res === "Draw") return res;
        else return `${res.toUpperCase()} Menang`;
    }

    if(win === '' && start) return null;

    return(
        <div className="h-100 position-absolute w-100 text-light">
            <section className="w-100 h-100 d-flex justify-content-center align-items-center">
                {!start ? 
                    <section className="text-center">
                        <h1>TIC TAC TOE</h1>
                        <span>By Hanif Ulunnuha Hidayat</span>
                    </section>:
                    <h1>{win === '' ? '' : winText(win) }</h1>
                }
            </section>
        </div>
    )
}

export default App;
