import { useState } from 'react'

export const usePagination = (rows) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }
}