import React, {ChangeEvent, useState} from "react";
import s from './Paginator.module.scss'

type PaginatorType = {
    pageSize: number
    portionSize?: number
    totalItemCounts: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    setPageCount: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Paginator: React.FC<PaginatorType> = ({
                                                       totalItemCounts,
                                                       pageSize,
                                                       onPageChanged,
                                                       currentPage = 1,
                                                       portionSize = 10,
                                                       setPageCount
                                                   }) => {
    let pagesCount = Math.ceil(totalItemCounts / pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.wrap}>
            <div className={s.numbers}>
                {portionNumber > 1 &&
                <a className={s.arrow} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}></a>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span key={p}
                            className={s.numb}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                <a className={s.arrowEnd} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}></a>}
            </div>

            <div className={s.selectWrap}>
                <span className={s.selectSpan}>Show</span>
                <select className={s.select} onChange={setPageCount}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
                <span className={s.selectSpan}>Cards per Page</span>
            </div>

        </div>
    )
}