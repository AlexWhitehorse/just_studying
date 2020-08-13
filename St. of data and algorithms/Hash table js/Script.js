function HashTable(size = 13) {
    const _store = [];
    const _size = size;

    // Свойства Хеш-функции:
    // На вход хэш-функции подается сообщение произвольной длины
    // На выходе хэш-функции формируется блок данных фиксированной длины
    // Значения на выходе хэш-функции распределены по равномерному закону
    // При изменении одного бита на входе хэш-функции существенно изменяется выход.
    function hash(string) {
        let index = 0;

        for (let i = 0; i < string.length; i++) {

            index += string.charCodeAt(i) * (i + 1);
        }
        return index % _size;
    }

    return {
        setElement(key, value) {
            const index = hash(key);

            if (!_store[index] || _store[index][0] === key) {
                
                _store[index] = [key, value];
            }else {

                throw Error("Collision!");
            }
        },

        getElement(key) {
            const index = hash(key);

            if (_store[index]) {
                return _store[index][1];
            }
        },

        dump() {
            return _store;
        }
    }
}

const ht = new HashTable();

ht.setElement("Vasia", "Petya");
ht.setElement("Petya1", "Vasia");
ht.setElement("Petya11", "Vasia");
ht.setElement("Petya111", "Vasia");
ht.setElement("Petya1111", "Vasia");
ht.setElement("Petya11111", "Vasia");
ht.setElement("Petya111111", "Vasia");
ht.setElement("Petya1111111", "Vasia");
ht.setElement("Petya11111111", "Vasia"); // collision
ht.setElement("Petya111111111", "Vasia");
ht.setElement("Vasia Pupkinovich", "Vasia");
console.log(ht.getElement("Vasia", "Petya"));
console.log(ht.dump());