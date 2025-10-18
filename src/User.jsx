function User(p){
    // if(p.isLoggedin){
    //     return <h3>Welcome {p.username} </h3>
    // }
    // return <h3>Login to continue</h3>
    return(p.isLoggedin ? <h3 className="wlcmtxt">Welcome {p.username} </h3> : <h3 className="errtxt">Login to continue!</h3>)
}
export default User