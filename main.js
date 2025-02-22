const container = document.querySelector('.container');

const controller = document.createElement('div');
controller.className = 'controller';
const heading = document.createElement('h1');
heading.className = 'heading';
heading.textContent = 'Mouse Sketching';
const ctrlBody = document.createElement('div');
ctrlBody.className = 'ctrlBody';
const inpLabel = document.createElement('label');
inpLabel.className = 'inpLabel';
inpLabel.textContent = 'Enter number of square per side (default: 16; minimum: 2; maximum: 100)';
const ctrlInp = document.createElement('input');
ctrlInp.className = 'ctrlInp';
ctrlInp.setAttribute('type', 'input');
ctrlInp.setAttribute('placeholder', '16');
const submitBtn = document.createElement('button');
submitBtn.className = 'submitBtn';
submitBtn.textContent = 'Proceed';
submitBtn.setAttribute('type', 'submit');

const sketchContainer = document.createElement('div');
sketchContainer.className = 'sketchContainer';
const sketchArea = document.createElement('div');
sketchArea.className = 'sketchArea';

let handleInpVal = (val) => {
    let re;
    if (val === '') {
        re = 16;
    } else re = Number(val.trim());
    if (Number.isNaN(re) || re < 2 || re > 100) {
        alert('You entered invalid value! Default value will be used. To modify, please check again.');
        ctrlInp.value = '';
        return false;
    }
    // console.log(re);

    return re;
};

submitBtn.addEventListener('click', () => {
    let num = handleInpVal(ctrlInp.value);

    sketchArea.innerHTML = '';

    if (num === false) {
        mouseSketch(16);
    } else mouseSketch(num);
});

ctrlBody.appendChild(inpLabel);
ctrlBody.appendChild(ctrlInp);
ctrlBody.appendChild(submitBtn);
controller.appendChild(heading);
controller.appendChild(ctrlBody);

let mouseSketch = (num = 16) => {
    let totalNum = num * num + 1;

    for (let i = 1; i < totalNum; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        // gridItem.textContent = `${i}`;
        gridItem.style.height = `calc(100% / ${num})`;

        gridItem.addEventListener('mouseenter', () => {
            gridItem.classList.add('drawn');
        });

        sketchArea.appendChild(gridItem);
    }
};

mouseSketch();
sketchContainer.appendChild(sketchArea);
container.appendChild(controller);
container.appendChild(sketchContainer);

