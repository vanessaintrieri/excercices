import { Outlet } from "react-router-dom";

const Blog =()=>{
    return(
        <>
        <section className="row">
            <article className="col">
                <p>This is the BLOG page</p>
            </article>
        </section>
        <Outlet></Outlet>
        </>
        
    );
}

export default Blog;