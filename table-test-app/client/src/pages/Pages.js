import React, {useContext} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Pages = observer(() => {

    const {datas} = useContext(Context);

    const pageCount = Math.ceil(datas.totalCount / datas.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className='pages'>
            <Pagination className='mt-5' >
                {pages.map(p =>
                    <Pagination.Item
                        key = {p}
                        active = {datas.page === p}
                        onClick = {()=> datas.setPage(p)}
                    >
                        {p}
                    </Pagination.Item>
                )}
            </Pagination>
        </div>

    );
});

export default Pages;