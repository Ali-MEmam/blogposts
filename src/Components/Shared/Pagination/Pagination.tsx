import { FC } from "react";
import { Pagination } from "react-bootstrap";
import { IProps } from "./model";

const PaginationItems: FC<IProps> = ({
  totalNumber,
  pageMax,
  handleChange,
  currentPage,
}) => {
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handleChange(+currentPage - 1)}
        disabled={!(+currentPage - 1)}
      />
      {Array.from(Array(Math.ceil(+totalNumber / +pageMax)), (e, i) => {
        return (
          <Pagination.Item
            key={i}
            active={i + 1 === +currentPage}
            onClick={() => handleChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        onClick={() => handleChange(+currentPage + 1)}
        disabled={+currentPage === Math.ceil(+totalNumber / +pageMax)}
      />
    </Pagination>
  );
};

export default PaginationItems;
