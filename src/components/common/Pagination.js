import React from 'react';

const Pagination = ({ productPerPage, totalProduct, paginate, currentPage }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
      pageNumbers.push(i)
   }

   return (
      <>
         <div className="col-xxl-12">
            <div className="basic-pagination wow fadeInUp text-center mt-20" data-wow-delay=".2s">
               <ul>
                  {
                     pageNumbers.map(number => (
                        <li key={number}>
                           <button onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                              {number}
                           </button>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </>
   );
};

export default Pagination;