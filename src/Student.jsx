
function Student(p){
    return(
        <div className="std">
            <p>Name: {p.name} , id: {p.id} , resultStatus: {p.isPass ? "Passed" : "Failed"} </p>
        </div>
    )
}
export default Student