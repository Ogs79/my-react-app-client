import { makeAutoObservable } from "mobx";


export default class GroupStore {
    constructor() {
        this._types = []
        this._brands = []
        this._groups = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setGroups(groups) {
        this._groups = groups;
    }

    setSelectedType(type) {
        this._page = 1;
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._page = 1;
        this._selectedBrand = brand;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    setLimit(limit) {
        this._limit = limit;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get groups() {
        return this._groups;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}