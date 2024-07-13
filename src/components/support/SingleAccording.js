import React from 'react';

const SingleAccording = ({number,condition = false,showClass,title}) => {
    return (
        <>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id={`heading${number}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${number}`} aria-expanded={condition} aria-controls={`collapse${number}`}>
                       {title}
                    </button>
                </h2>
                <div id={`collapse${number}`} className={showClass} aria-labelledby={`heading${number}`} data-bs-parent="#sale-accordion">
                    <div className="accordion-body">
                        <p>{`Only a quid cor blimey guvnor jolly good brolly gutted mate cup of tea cheers it grub blatant, some dodgy chav william buggered my good sir owt to do with me the bee's knees bubble and squeak.`}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleAccording;