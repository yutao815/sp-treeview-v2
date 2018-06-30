export const SELECT_NONE = 0;
export const SELECT_CHECKBOX = 1;
export const SELECT_RADIO = 2;

export const CHECKED_VALUE_ALL = 0;
export const CHECKED_VALUE_LEAVES = 1;
export const CHECKED_VALUE_PARENT = 2;


export class Config {
    constructor(
        private _treeLevelConfig = new TreeLevelConfig(),
        private _dropdownLevelConfig = new DropdownLevelConfig()
    ) { }

    get treeLevelConfig(): TreeLevelConfig {
        return this._treeLevelConfig;
    }

    set treeLevelConfig(treeLevelConfig: TreeLevelConfig) {
        this._treeLevelConfig = treeLevelConfig;
    }

    get dropdownLevelConfig(): DropdownLevelConfig {
        return this._dropdownLevelConfig;
    }

    set dropdownLevelConfig(dropdownLevelConfig: DropdownLevelConfig) {
        this._dropdownLevelConfig = dropdownLevelConfig;
    }
}


/**
 * this class set the config for dropdown
 */
export class DropdownLevelConfig {
    constructor(
        private _height = 'auto',
        private _showDropdownDefault = false
    ) { }

    get height(): string {
        return this._height;
    }

    set height(height: string) {
        this._height = height;
    }

    get showDropdownDefault(): boolean {
        return this._showDropdownDefault;
    }

    set showDropdownDefault(showDropdownDefault: boolean) {
        this._showDropdownDefault = showDropdownDefault;
    }

}

/**
 * this class sets the config for complete tree
 */
export class TreeLevelConfig {
    constructor(
        // if lazyLoad then make service call for children
        private _lazyLoad = false,
        private _select = SELECT_NONE,
        private _checkedValue = CHECKED_VALUE_LEAVES,
        private _search = true,
        private _deleteNode = false,
        private _addChild = false
    ) { }

    get lazyLoad(): boolean {
        return this._lazyLoad;
    }

    set lazyLoad(lazyLoad: boolean) {
        this._lazyLoad = lazyLoad;
    }

    get select(): number {
        return this._select;
    }

    set select(select: number) {
        this._select = select;
    }

    get checkedValue(): number {
        return this._checkedValue;
    }

    set checkedValue(checkedValue: number) {
        this._select = checkedValue;
    }

    get search(): boolean {
        return this._search;
    }

    set search(search: boolean) {
        this._search = search;
    }

    get deleteNode(): boolean {
        return this._deleteNode;
    }

    set deleteNode(deleteNode: boolean) {
        this._deleteNode = deleteNode;
    }

    get addChild(): boolean {
        return this._addChild;
    }

    set addChild(addChild: boolean) {
        this._addChild = addChild;
    }

}


/**
 * this class properties if set will override the tree level config  
 */
export class NodeLevelConfig {
    constructor(
        private _deleteNode?: boolean,
        private _addChild?: boolean
    ) { }

    get deleteNode(): boolean {
        return this._deleteNode;
    }
    set deleteNode(deleteNode: boolean) {
        this._deleteNode = deleteNode;
    }

    get addChild(): boolean {
        return this._addChild;
    }
    set addChild(addChild: boolean) {
        this._addChild = addChild;
    }
}