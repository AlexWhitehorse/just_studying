class GridView {
    // JS dock
    /**
     *  properties
     *  @param [array] _tableClass  -  css классы оформления
     *  @param [array] data  -  входные данные
     *  @param [array] _attributes  -  управляет что и куда выводить из входных данных data
     *  @param [array] _elemen  -  куда выводить таблицу 
     *  @param [array] _header  -  зфголовок таблицы 
     *  @param [array] _headerClass - css классы заголовка
     */
    
    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }

    /**
     * method set header
     * @param {string} header
     */
    set _header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * method set headerClass
     * @param {object} headerClass
     */
    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * method set headerClass
     * @param {string} element
     */
    set setElement(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }

    /**
     * method for show GttidViewTable
     */

    render() {
        
    }
}