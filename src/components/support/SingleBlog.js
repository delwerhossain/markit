import Link from 'next/link';


const SingleBlog = ({title}) => {
    return (
        <>
            <div className="blog__item mb-35">
                <p className="blog__text">
                    <Link href="blog-details">
                        <a >{title}</a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default SingleBlog;