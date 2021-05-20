import React from 'react';
import './controlPanel.css';
import Dropdown from "react-bootstrap/Dropdown";

const ControlPanel = (props) => {

    let onColumn=(title)=>{
        props.changeColumn(title)
    };

    let onAction=(action)=>{
        props.onChooseAction(action)
    };
    return (
        <div className='panel'>
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {props.nameColumn || 'Выбрать колонку'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='th-data'>Дата</Dropdown.Item>
                        <Dropdown.Item onClick={ ()=>onColumn("Название")}>Название</Dropdown.Item>
                        <Dropdown.Item onClick={ ()=>onColumn("Количество")}> Количество </Dropdown.Item>
                        <Dropdown.Item onClick={ ()=>onColumn("Растояние")}>Растояние</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {props.actionName || 'Выбрать условие'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ ()=>onAction('равно')}>равно</Dropdown.Item>
                        <Dropdown.Item onClick={ ()=>onAction('содержит')}>содержит</Dropdown.Item>
                        <Dropdown.Item onClick={ ()=>onAction('больше')}>больше</Dropdown.Item>
                        <Dropdown.Item onClick={ ()=>onAction('меньше')}>меньше</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default ControlPanel;
