import Table from "../table/Table";

import {useRest} from "../hooks/Hooks";

const url="http://localhost:3005/employees";

const TableList=()=>{

    const {resultData:posts, isLoading, error}= useRest(url);
    
    if (error){
        return <div>Error:{error.message}</div>
    }
    if (isLoading){
        return <div>Loading..</div>
    } else{
        return(
            <div className="container my-2">
            {
            posts.map(p=>{
                return <Table data={p} />
            })
            }
            </div>
        );
    }

   
}

export default TableList;