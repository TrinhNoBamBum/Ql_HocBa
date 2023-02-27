import React from "react";
function SingleBlog(_props: any){
    return (
    
    <div className="col-lg-4" key={_props.index}>
    <div className="single_blog">
        <div className="blog_thumb">
            <a href="blog-details.html"><img src="assets/img/blog/blog1.jpg" alt="" /></a>
            <div className="blog_icon">
                <a href="blog-details.html"></a>
            </div>
        </div>
        <div className="blog_content">
            <h3><a href="blog-details.html">{_props.dataBlog.Title}</a></h3>
            <div className="author_name">
                <p>
                    <span className="post_by">by</span>
                    <span className="themes">ecommerce Themes</span>
                    <br></br>
                    {_props.dataBlog.Created_At}
                </p>

            </div>
            <div className="post_desc">
                <p>{_props.dataBlog.Content}</p>
            </div>
        </div>
    </div>
</div>
    )

}

export default SingleBlog