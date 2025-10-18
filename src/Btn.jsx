function Btn(p){
    
    let clk = (e)=> {
        e.target.style.background = "red";
        e.target.innerText = "NOO";
        console.log("Im angry, ")
    }
    return(<button onClick={(e)=> clk(e)}>click me</button>)
}
export default Btn