import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { getPaginationAction } from '../../redux/action/paginationAction';

function PaginateCustom(props) {
    const dispatch = useDispatch();
 
    const [getNewOffset, setNewOffset] = useState('');

    const { paginationGetData } = useSelector(state => state.getPaginationReducer);

    const initialDispatch = props.initialDispatch === false ? false : true;
   
    useEffect(() => {
        if (initialDispatch) {
            dispatch(getPaginationAction(props.paginateInfo.path, props.paginateInfo.limit, props.paginateInfo.offset, props.paginateInfo.params));
        }
    }, [dispatch]);

    useEffect(() => { 
        props.onPaginateData(paginationGetData, getNewOffset);
    }, [paginationGetData]);

    const handlePageClick = (data) => {
        const paginateNewOffset = props.paginateInfo.limit * data.selected ?? data.selected + 1;
        setNewOffset(paginateNewOffset)
        const getMoreData = (paginateNewOffset) => {
            dispatch(getPaginationAction(props.paginateInfo.path, props.paginateInfo.limit, paginateNewOffset, props.paginateInfo.params));
        }
        getMoreData(paginateNewOffset)
    };

    return (
        <>
            {paginationGetData && paginationGetData?.count > props.paginateInfo.limit ?
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={paginationGetData?.total_number_of_pages}
                    previousLabel="<< Previous"
                    renderOnZeroPageCount={null}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
                : ''}
        </>
    );
}

export default PaginateCustom;