function CustomForm(){
    return(
        <div className="row justify-content-center mt-5 ">
            <div className="col-5">
               <form action="example.com" method="post">
               <label htmlFor="txtUsername">Username</label>
                <input id="txtUsername" type="text" className="form-control"></input>
                <label htmlFor="txtPassword">Password</label>
                <input id="txtPassword" type="password" className="form-control"></input>
                <button type="submit" className="btn btn-primary">Invia</button>
               </form>
            </div>
        </div>
    )
}

export default CustomForm;