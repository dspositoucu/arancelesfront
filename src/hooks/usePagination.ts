import { useState, ChangeEvent } from 'react'

export const usePagination = (rows:number) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rows);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }
}