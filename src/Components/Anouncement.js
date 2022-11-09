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

export default Anouncement;