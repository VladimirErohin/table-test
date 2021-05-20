import {makeAutoObservable} from "mobx";

export default class DataStore {

    constructor() {
        this._datas = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 4;
        makeAutoObservable(this)
    }

    setData(data) {

        this._datas = data
    }

    get data() {
        return this._datas
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}
