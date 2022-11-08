import "./Form.scss";

function CustomForm({action, change}){
    return(
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col">
            
                    <div class="input-group mb-3">
                    <label htmlFor="txtText">Inserire un testo</label>
                        <input id="txtPhrase" type="text" class="form-control" onChange={(e)=>{action(e.target.value)}}></input>
                        <div class="input-group-append">
                        <button type="submit" className="btn btn-primary" onClick={()=>{change()}}>Invia</button>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>  
        

    )
}

export default CustomForm;