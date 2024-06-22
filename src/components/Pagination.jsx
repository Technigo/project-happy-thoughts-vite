import PropTypes from 'prop-types';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='pagination'>
      {[...Array(totalPages).keys()].map((i) => {
        const pageNumber = i + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};