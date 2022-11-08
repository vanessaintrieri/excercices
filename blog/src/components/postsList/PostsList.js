import Post from "../post/Post";

import {useRest} from "../hooks/Hooks";

const url="https://jsonplaceholder.typicode.com/posts";

const PostsList=()=>{

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
                return <Post data={p} />
            })
            }
            </div>
        );
    }

   
}

export default PostsList;