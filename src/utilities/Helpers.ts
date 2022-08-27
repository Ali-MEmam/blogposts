export const SlicePagination = (
  array: Array<any>,
  page_size: Number,
  page_number: Number
): Array<any> => {
  return array.slice(
    (Number(page_number) - 1) * Number(page_size),
    Number(page_number) * Number(page_size)
  );
};
