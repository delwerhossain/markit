import Link from 'next/link';


const SinglePrice = ({ title, price, activeClass = '' }) => {
    return (
        <>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`pricing__item ${activeClass && activeClass} text-center transition-3 mb-30`}>
                    <div className="pricing__header mb-25">
                        <h3>{title}</h3>
                        <p>What You Are Looking For!</p>
                    </div>
                    <div className="pricing__tag d-flex align-items-start justify-content-center mb-30">
                        <span>$</span>
                        <h4>{price}</h4>
                    </div>
                    <div className="pricing__switch mb-10">
                        <button type="button">Switch to yearly billing</button>
                    </div>
                    <div className="pricing__buy mb-20">
                        <Link href="/pricing">
                            <a className="m-btn m-btn-border m-btn-border-5 w-100"> <span></span> Buy Now</a>
                        </Link>
                    </div>
                    <div className="pricing__features text-start">
                        <ul>
                            <li>Powerful Admin Panel</li>
                            <li>1 Native Android App</li>
                            <li>Multi-Language Support</li>
                            <li>Free SSL Certificate</li>
                            <li>1X Allocated Resources</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePrice;