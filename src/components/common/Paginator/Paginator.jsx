import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({currentPage, totalCount, pageSize, onPageChanged}) => {
    let pagesItems = () => {
        let pagesCount = totalCount / pageSize;
        pagesCount = Math.ceil(pagesCount);

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        let startPage;
        let endPage;
        if (currentPage === pages[0]) {
            endPage = currentPage + 4;
            startPage = pages[0];
        } else if (currentPage === pages[1]) {
            endPage = currentPage + 3;
            startPage = pages[0];
        } else if (currentPage >= pages[2] && currentPage !== pages.length && currentPage !== pages.length - 1) {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        } else if (currentPage === pages.length || currentPage === pages.length - 1) {
            startPage = pages.length - 4;
            endPage = pages.length;
        }

        return pages.map((page, ix) => {
            let pageNumber = <span
                key={page}
                onClick={() => onPageChanged(page)}
                className={(currentPage === page) ? styles.selectedPage: styles.pageNumber }
            >{page}</span>;
            if (ix+1 >= startPage && ix+1 <= endPage) {
                return pageNumber
            }
            if (ix+1 === pages.length && currentPage < pages.length - 1) {
                return <span
                    key={page}
                    onClick={() => onPageChanged(page)}
                    className={`${styles.firstLastPage} ${styles.lastPage}`}
                >В конец</span>;
            }
            if (ix+1 === pages[0]) {
                return <span
                    key={page}
                    onClick={() => onPageChanged(page)}
                    className={`${styles.firstLastPage} ${styles.firstPage}`}
                >В начало</span>;
            }
        })
    };


    return (
        <div>
            <div>{pagesItems()}</div>
        </div>
    );
};

export default Paginator;