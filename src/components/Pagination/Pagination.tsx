import React from 'react';
import { IPagination } from '../../interface/Pagination/IPagination';
import { Link } from 'react-router-dom';

export const Pagination: React.FC<IPagination> = ({ pages }) => {
  return (
    <nav aria-label="Page navigation example" style={{ width: '100%' }}>
      <ul className="pagination pagination-sm justify-content-center">
        {/* <li className="page-item">
          <Link
            className="page-link"
            to={`?page=${page - 1}`}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li> */}
        {pages.map((page) => (
          <li className="page-item">
            <Link className="page-link" to={`?page=${page}`}>
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
          {/* <Link
            className="page-link"
            to={`?page=${page + 1}`}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link> */}
        </li>
      </ul>
    </nav>
  );
};
