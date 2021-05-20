import React from 'react';
import Table from "react-bootstrap/Table";

const TableM = (props) => {
    return (
        <div className="table-responsive">
            <div className="table">
                <div className='tableM'>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th className='th-data'>Дата</th>
                            <th onClick={props.sortTitle}>
                                {!props.valueSortTitle ?
                                    <span>Название &#8645;</span> : (props.valueSortTitle === 'up' ?
                                        <span>Название &#9650;</span> : <span>Название &#9660;</span>)}
                            </th>
                            <th onClick={props.sortAmount}>
                                {!props.valueSortAmount ? <span>Количество &#9660;</span> :
                                    <span>Количество &#9650;</span>}
                            </th>
                            <th onClick={props.sortDistance}>
                                {!props.valueSortDistance ? <span>Растояние &#9660;</span> :
                                    <span>Растояние &#9650;</span>}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.enterValue.map((i) => {
                            return (
                                <tr key={i.id}>
                                    <td>{i.data}</td>
                                    <td>{i.title}</td>
                                    <td>{i.amount}</td>
                                    <td>{i.distance}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default TableM;