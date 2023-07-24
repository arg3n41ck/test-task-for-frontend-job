export const getPaginationUrl = (pageNumber: number) => `/?page=${pageNumber}`;

export const extractPageFromUrl = (search: string): number => {
  const match = search.match(/page=(\d+)/);
  return match ? Number(match[1]) : 1;
};
