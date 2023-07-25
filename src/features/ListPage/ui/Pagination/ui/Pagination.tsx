import { FC, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/redux";
import {
  extractPageFromUrl,
  getPaginationUrl,
} from "shared/lib/utils/pagination";
import { setPageNumber } from "features/ListPage/model/slices/postsSlice";
import { PaginationContainer } from "entities/ListPage/Pagination/ui/styles";

const Pagination: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentPage, totalPages } = useAppSelector((state) => state.list);

  const handlePaginationChange = (pageNumber: number) => {
    dispatch(setPageNumber(pageNumber));
  };

  useEffect(() => {
    dispatch(setPageNumber(extractPageFromUrl(location.search)));
  }, [dispatch, location.search]);

  useEffect(() => {
    navigate(getPaginationUrl(currentPage), { replace: true });
  }, [navigate, currentPage]);

  return (
    <PaginationContainer>
      <button
        onClick={() => handlePaginationChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination_button"
      >
        Назад
      </button>

      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePaginationChange(pageNumber)}
              className={`${
                pageNumber === currentPage ? "active" : ""
              } number_button`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => handlePaginationChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination_button"
      >
        Далее
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
