function Button(){
    let styling = {
        backgroundColor: "rgb(45, 145, 233)",
        border: "3px solid rgba(6, 65, 228, 1)",
        padding: "10px 20px",
        color: "white",
        borderRadius: "10px",
        cursor: "pointer",
    }
    return(<button className="btn" style={styling}>Click me</button>)
}
export default Button