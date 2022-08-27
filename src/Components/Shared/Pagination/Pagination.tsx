import { FC, ReactElement } from "react";
import { Pagination } from "react-bootstrap";

const PaginationItems: FC<any> = ({
  totalNumber = 1,
  maxPage = 10,
  handleChange,
  currentPage,
}) => {
  return (
    <Pagination>
      <Pagination.Prev onClick={() => handleChange(currentPage - 1)} />
      {Array.from(Array(Math.ceil(totalNumber / 10)), (e, i) => {
        return (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => handleChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        );
      })}
      <Pagination.Next onClick={() => handleChange(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationItems;
