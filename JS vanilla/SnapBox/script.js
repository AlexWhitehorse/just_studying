let block = {
    height: 50,
    width: 50,
    color: 'red',
}

class Square {
    width;
    heigth;

    constructor(width, height) {
        this.width = width;
        this.heiht = height;
    }

    createSquare() {
        square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.height = this.height + 'px';
        square.style.width = this.width = 'px';
    }
}

class Field {
    height = 200;
    width = 200;
    color = 'black';

    createField = (parrentBlock) => {
        let field = document.createElement('div');

        field.style.backgroundColor = this.color;
        field.style.height = this.height + 'px';
        field.style.width = this.width + 'px';

        parrentBlock.append(field);
    }

    devideBySquares = (numH, numW) => {

    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    parrrentDiv = document.getElementById('field');
    let field = new Field;
    field.createField(parrrentDiv);
});