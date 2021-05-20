import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchDatas} from "../../http/dataAPI";
import SearchInput from "../search-Input/SearchInput";
import TableM from "../table/TableM";
import ControlPanel from "../controlPanel/ControlPanel";
import Pages from "../../pages/Pages";


const MainPage = observer(() => {

        const {datas} = useContext(Context);

        useEffect(() => {
            fetchDatas(datas.page, 4).then(data => {
                datas.setData(data.rows);
                datas.setTotalCount(data.count);
                filterEqually(data.rows)
            })
        }, [datas.page]);

        const [enterValue, filterEqually] = useState([]);
        const [valueInput, setValue] = useState('');
        const [nameColumn, setNameColumn] = useState('');

        const [contains, setContains] = useState(false);
        const [equally, setEqually] = useState(false);
        const [more, setMore] = useState(false);
        const [less, setLess] = useState(false);
        const [valueSortTitle, setSortTitle] = useState('');
        const [valueSortAmount, setSortAmount] = useState(false);
        const [valueSortDistance, setSortDistance] = useState(false);
        const [actionName, setActionName] = useState('');


        //сортировка по полей
        let sortTitle = () => {
            if (!valueSortTitle) {
                filterEqually(
                    [...datas._datas].sort(function (a, b) {
                        const nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
                        if (nameA < nameB) //sort string ascending
                            return -1;
                        if (nameA > nameB)
                            return 1;
                        return 0; //default return value (no sorting)
                    })
                );
                setSortTitle('down');
                //setSortTitle('');
                return;
            }
            if (valueSortTitle === 'down') {  // if (valueSortTitle === 'up') {   //  if (!valueSortTitle) {
                filterEqually(data => data.reverse());
                setSortTitle('up'); //setSortTitle('down');  //setSortTitle(true);
                return;
            }
            filterEqually([...datas._datas]);
            setSortTitle('')
        };

        let sortAmount = () => {
            if (!valueSortAmount) {
                filterEqually([...datas._datas].sort(function (a, b) {
                    if (+a.amount < +b.amount) {   //от 15
                        return +a.amount - +b.amount
                    }
                }));
                setSortAmount(true);
                return;
            }
            if (valueSortAmount) {
                filterEqually([...datas._datas].sort(function (a, b) {
                    if (+a.amount > +b.amount) {    //от 100
                        return +b.amount - +a.amount
                    }
                }));
                setSortAmount(false);
                return;
            }
            filterEqually([...datas._datas]);
            valueSortAmount(true)
        };

        let sortDistance = () => {
            if (!valueSortDistance) {
                filterEqually([...datas._datas].sort(function (a, b) {
                    if (+a.distance < +b.distance) {   //от 15
                        return +a.distance - +b.distance
                    }
                }));
                setSortDistance(true);
                return;
            }
            if (valueSortDistance) {
                filterEqually([...datas._datas].sort(function (a, b) {
                    if (+a.distance > +b.distance) {    //от 100
                        return +b.distance - +a.distance
                    }
                }));
                setSortDistance(false);
                return;
            }
            filterEqually([...datas._datas]);
            valueSortDistance(true)
        };

        //  логика действий
        let forTitle = () => {
            if (contains) {
                filterEqually(datas._datas.filter(i => {
                    if (i.title === valueInput || i.amount === valueInput || i.distance === valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            }
        };

        let forAmount = () => {
            if (equally) {
                filterEqually(datas._datas.filter(i => {
                    if (+i.amount === +valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            }
            if (more) {
                filterEqually(datas._datas.filter(i => {
                    if (+i.amount > +valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            }
            if (less) {
                filterEqually(datas._datas.filter(i => {
                    if (+i.amount < +valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            }
        };

        let forDistance = () => {
            if (equally) {
                filterEqually(datas._datas.filter(i => {
                    if (+i.distance === +valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            }
            if (more) {
                filterEqually(datas._datas.filter(i => {
                    if (+i.distance > +valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            }
            if (less) {
                filterEqually(datas._datas.filter(i => {
                    if (+i.distance < +valueInput) {
                        return i
                    } else {
                        return null
                    }
                }))
            } else {
                return null
            }
        };

       // выбрать колонку
        let changeColumn = (nameColumn) => {
            setNameColumn(nameColumn)
        };

        let chooseAction = () => {
            switch (nameColumn) {
                case 'Название':
                    return forTitle();

                case 'Количество':
                    return forAmount();

                case 'Растояние':
                    return forDistance();

                default:
                    return null
            }
        };

       // выбрать действие
        let onChooseAction = (action) => {
            setActionName(action);
            switch (action) {
                case 'равно':
                    return setEqually(true);

                case 'содержит':
                    return setContains(true);

                case 'больше':
                    return setMore(true);

                case 'меньше':
                    return setLess(true);

                default:
                    return null
            }
        };

        let onEnter = () => {
            chooseAction();
            setContains(false);
            setEqually(false);
            setMore(false);
            setLess(false);
            setValue('');
            setActionName('');
            setNameColumn('')
        };

        return (
            <div className='mainTable'>
                <div className='panel'>
                    <ControlPanel
                        nameColumn={nameColumn}
                        changeColumn={changeColumn}
                        actionName={actionName}
                        onChooseAction={onChooseAction}
                    />
                    <SearchInput
                        value={valueInput}
                        setValue={setValue}
                        onEnter={onEnter}/>
                </div>
                <TableM
                    sortTitle={sortTitle}
                    sortAmount={sortAmount}
                    sortDistance={sortDistance}
                    valueSortTitle={valueSortTitle}
                    valueSortAmount={valueSortAmount}
                    valueSortDistance={valueSortDistance}
                    enterValue={enterValue}
                />
                <Pages/>
            </div>
        );
    })
;

export default MainPage;
