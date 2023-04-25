const arr1 = [{
  name: 'Backquote', key: '§', shiftKeyEN: '±', keyRU: '&gt', shiftKeyRU: '&lt', group: 'basic',
}, {
  name: 'Digit1', key: '1', shiftKeyEN: '!', keyRU: '1', shiftKeyRU: '!', group: 'basic',
}, {
  name: 'Digit2', key: '2', shiftKeyEN: '@', keyRU: '2', shiftKeyRU: '"', group: 'basic',
}, {
  name: 'Digit3', key: '3', shiftKeyEN: '#', keyRU: '3', shiftKeyRU: '№', group: 'basic',
}, {
  name: 'Digit4', key: '4', shiftKeyEN: '$', keyRU: '4', shiftKeyRU: ';', group: 'basic',
}, {
  name: 'Digit5', key: '5', shiftKeyEN: '%', keyRU: '5', shiftKeyRU: '%', group: 'basic',
}, {
  name: 'Digit6', key: '6', shiftKeyEN: '^', keyRU: '6', shiftKeyRU: ':', group: 'basic',
}, {
  name: 'Digit7', key: '7', shiftKeyEN: '&', keyRU: '7', shiftKeyRU: '?', group: 'basic',
}, {
  name: 'Digit8', key: '8', shiftKeyEN: '*', keyRU: '8', shiftKeyRU: '*', group: 'basic',
}, {
  name: 'Digit9', key: '9', shiftKeyEN: '(', keyRU: '9', shiftKeyRU: '(', group: 'basic',
}, {
  name: 'Digit0', key: '0', shiftKeyEN: ')', keyRU: '0', shiftKeyRU: ')', group: 'basic',
}, {
  name: 'Minus', key: '-', shiftKeyEN: '_', keyRU: '-', shiftKeyRU: '_', group: 'basic',
}, {
  name: 'Equal', key: '=', shiftKeyEN: '+', keyRU: '=', shiftKeyRU: '+', group: 'basic',
}, {
  name: 'Backspace', key: '⟵', shiftKeyEN: '⟵', keyRU: '⟵', shiftKeyRU: '⟵', group: 'service',
}];
const arr2 = [{
  name: 'Tab', key: '⇥ Tab', shiftKeyEN: '⇥ Tab', keyRU: '⇥ Tab', shiftKeyRU: '⇥ Tab', group: 'service',
}, {
  name: 'KeyQ', key: 'q', shiftKeyEN: 'Q', keyRU: 'й', shiftKeyRU: 'Й', group: 'basic',
}, {
  name: 'KeyW', key: 'w', shiftKeyEN: 'W', keyRU: 'ц', shiftKeyRU: 'Ц', group: 'basic',
}, {
  name: 'KeyE', key: 'e', shiftKeyEN: 'E', keyRU: 'у', shiftKeyRU: 'У', group: 'basic',
}, {
  name: 'KeyR', key: 'r', shiftKeyEN: 'R', keyRU: 'к', shiftKeyRU: 'К', group: 'basic',
}, {
  name: 'KeyT', key: 't', shiftKeyEN: 'T', keyRU: 'е', shiftKeyRU: 'Е', group: 'basic',
}, {
  name: 'KeyY', key: 'y', shiftKeyEN: 'Y', keyRU: 'н', shiftKeyRU: 'Н', group: 'basic',
}, {
  name: 'KeyU', key: 'u', shiftKeyEN: 'U', keyRU: 'г', shiftKeyRU: 'Г', group: 'basic',
}, {
  name: 'KeyI', key: 'i', shiftKeyEN: 'I', keyRU: 'ш', shiftKeyRU: 'Ш', group: 'basic',
}, {
  name: 'KeyO', key: 'o', shiftKeyEN: 'O', keyRU: 'щ', shiftKeyRU: 'Щ', group: 'basic',
}, {
  name: 'KeyP', key: 'p', shiftKeyEN: 'P', keyRU: 'з', shiftKeyRU: 'З', group: 'basic',
}, {
  name: 'BracketLeft', key: '[', shiftKeyEN: '{', keyRU: 'х', shiftKeyRU: 'Х', group: 'basic',
}, {
  name: 'BracketRight', key: ']', shiftKeyEN: '}', keyRU: 'ъ', shiftKeyRU: 'Ъ', group: 'basic',
}, {
  name: 'Enter', key: 'Enter', shiftKeyEN: 'Enter', keyRU: 'Enter', shiftKeyRU: 'Enter', group: 'service',
}];
const arr3 = [{
  name: 'CapsLock', key: '⇪ Caps', shiftKeyEN: '⇪ Caps', keyRU: '⇪ Caps', shiftKeyRU: '⇪ Caps', group: 'service',
}, {
  name: 'KeyA', key: 'a', shiftKeyEN: 'A', keyRU: 'ф', shiftKeyRU: 'Ф', group: 'basic',
}, {
  name: 'KeyS', key: 's', shiftKeyEN: 'S', keyRU: 'ы', shiftKeyRU: 'Ы', group: 'basic',
}, {
  name: 'KeyD', key: 'd', shiftKeyEN: 'D', keyRU: 'в', shiftKeyRU: 'В', group: 'basic',
}, {
  name: 'KeyF', key: 'f', shiftKeyEN: 'F', keyRU: 'а', shiftKeyRU: 'А', group: 'basic',
}, {
  name: 'KeyG', key: 'g', shiftKeyEN: 'G', keyRU: 'п', shiftKeyRU: 'П', group: 'basic',
}, {
  name: 'KeyH', key: 'h', shiftKeyEN: 'H', keyRU: 'р', shiftKeyRU: 'Р', group: 'basic',
}, {
  name: 'KeyJ', key: 'j', shiftKeyEN: 'J', keyRU: 'о', shiftKeyRU: 'О', group: 'basic',
}, {
  name: 'KeyK', key: 'k', shiftKeyEN: 'K', keyRU: 'л', shiftKeyRU: 'Л', group: 'basic',
}, {
  name: 'KeyL', key: 'l', shiftKeyEN: 'L', keyRU: 'д', shiftKeyRU: 'Д', group: 'basic',
}, {
  name: 'Semicolon', key: ';', shiftKeyEN: ':', keyRU: 'ж', shiftKeyRU: 'Ж', group: 'basic',
}, {
  name: 'Quote', key: "'", shiftKeyEN: '\\', keyRU: 'э', shiftKeyRU: 'Э', group: 'basic',
}, {
  name: 'Backslash', key: '\\', shiftKeyEN: '|', keyRU: 'ё', shiftKeyRU: 'Ё', group: 'basic',
}];
const arr4 = [{
  name: 'ShiftLeft', key: '⇧', shiftKeyEN: '⇧', keyRU: '⇧', shiftKeyRU: '⇧', group: 'service',
}, {
  name: 'IntlBackslash', key: '`', shiftKeyEN: '~', keyRU: ']', shiftKeyRU: '[', group: 'basic',
}, {
  name: 'KeyZ', key: 'z', shiftKeyEN: 'Z', keyRU: 'я', shiftKeyRU: 'Я', group: 'basic',
}, {
  name: 'KeyX', key: 'x', shiftKeyEN: 'X', keyRU: 'ч', shiftKeyRU: 'Ч', group: 'basic',
}, {
  name: 'KeyC', key: 'c', shiftKeyEN: 'C', keyRU: 'с', shiftKeyRU: 'С', group: 'basic',
}, {
  name: 'KeyV', key: 'v', shiftKeyEN: 'V', keyRU: 'м', shiftKeyRU: 'М', group: 'basic',
}, {
  name: 'KeyB', key: 'b', shiftKeyEN: 'B', keyRU: 'и', shiftKeyRU: 'И', group: 'basic',
}, {
  name: 'KeyN', key: 'n', shiftKeyEN: 'N', keyRU: 'т', shiftKeyRU: 'Т', group: 'basic',
}, {
  name: 'KeyM', key: 'm', shiftKeyEN: 'M', keyRU: 'ь', shiftKeyRU: 'Ь', group: 'basic',
}, {
  name: 'Comma', key: ',', shiftKeyEN: '<', keyRU: 'б', shiftKeyRU: 'Б', group: 'basic',
}, {
  name: 'Period', key: '.', shiftKeyEN: '>', keyRU: 'ю', shiftKeyRU: 'Ю', group: 'basic',
}, {
  name: 'Slash', key: '/', shiftKeyEN: '?', keyRU: '.', shiftKeyRU: ',', group: 'basic',
}, {
  name: 'ArrowUp', key: '▲', shiftKeyEN: '▲', keyRU: '▲', shiftKeyRU: '▲', group: 'service',
}, {
  name: 'ShiftRight', key: '⇧ Shift', shiftKeyEN: '⇧ Shift', keyRU: '⇧ Shift', shiftKeyRU: '⇧ Shift', group: 'service',
}];
const arr5 = [{
  name: 'Fn', key: 'fn', shiftKeyEN: 'fn', keyRU: 'fn', shiftKeyRU: 'fn', group: 'service',
}, {
  name: 'ControlLeft', key: 'Ctrl', shiftKeyEN: 'Ctrl', keyRU: 'Ctrl', shiftKeyRU: 'Ctrl', group: 'service',
}, {
  name: 'AltLeft', key: 'Opt', shiftKeyEN: 'Opt', keyRU: 'Opt', shiftKeyRU: 'Opt', group: 'service',
}, {
  name: 'MetaLeft', key: 'Com', shiftKeyEN: 'Com', keyRU: 'Com', shiftKeyRU: 'Com', group: 'service',
}, {
  name: 'Space', key: ' ', shiftKeyEN: ' ', keyRU: ' ', shiftKeyRU: ' ', group: 'basic',
}, {
  name: 'MetaRight', key: 'Com', shiftKeyEN: 'Com', keyRU: 'Com', shiftKeyRU: 'Com', group: 'service',
}, {
  name: 'AltRight', key: 'Opt', shiftKeyEN: 'Opt', keyRU: 'Opt', shiftKeyRU: 'Opt', group: 'service',
}, {
  name: 'ArrowLeft', key: '◄', shiftKeyEN: '◄', keyRU: '◄', shiftKeyRU: '◄', group: 'service',
}, {
  name: 'ArrowDown', key: '▼', shiftKeyEN: '▼', keyRU: '▼', shiftKeyRU: '▼', group: 'service',
}, {
  name: 'ArrowRight', key: '►', shiftKeyEN: '►', keyRU: '►', shiftKeyRU: '►', group: 'service',
}];

const mainDiv = document.createElement('div');
mainDiv.className = 'centralizer';
mainDiv.innerHTML = `<p class="title">RSS Виртуальная клавиатура</p>
      <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea>
      <div class="body--keyboard keyboard" id="keyboard">
      <div class="keyboard--row 1 row"></div>
      <div class="keyboard--row 2 row"></div>
      <div class="keyboard--row third row"></div>
      <div class="keyboard--row four row"></div>
      <div class="keyboard--row five row"></div>
      </div>
        <p class="description">Клавиатура создана в операционной системе macOS</p>
        <p class="language">Для переключения языка: fn</p>`;

document.body.append(mainDiv);

class Btn {
  constructor(name, key, shiftKeyEN, keyRU, shiftKeyRU, group) {
    this.name = name;
    this.key = key;
    this.shiftKeyEN = shiftKeyEN;
    this.keyRU = keyRU;
    this.shiftKeyRU = shiftKeyRU;
    this.group = group;
  }

  render(line) {
    const keyboardRow = document.querySelectorAll('.keyboard--row');
    keyboardRow[line].innerHTML += `
    <div class="keyboard--key key ${this.name} ${this.group}">
      <span class="rus hidden">
        <span class="caseDown hidden">${this.keyRU}</span>
        <span class="caseUp hidden">${this.shiftKeyRU}</span>
        <span class="caps hidden">${this.shiftKeyRU}</span>
        <span class="shiftCaps hidden">${this.keyRU}</span>
      </span>
      <span class="eng">
        <span class="caseDown">${this.key}</span>
        <span class="caseUp hidden">${this.shiftKeyEN}</span>
        <span class="caps hidden">${this.shiftKeyEN}</span>
        <span class="shiftCaps hidden">${this.key}</span>
      </span>
    </div>`;
  }
}
function createHtml(arr, line) {
  for (let i = 0; i < arr.length; i += 1) {
    const k = arr[i];
    new Btn(k.name, k.key, k.shiftKeyEN, k.keyRU, k.shiftKeyRU, k.group).render(line);
  }
}
createHtml(arr1, 0);
createHtml(arr2, 1);
createHtml(arr3, 2);
createHtml(arr4, 3);
createHtml(arr5, 4);

// Language
const fn = document.querySelector('.Fn');
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');
const cas = document.querySelectorAll('.caseDown');
fn.addEventListener('click', () => {
  localStorage.setItem('lang', 'changed');
  eng.forEach((item) => {
    item.classList.toggle('hidden');
  });
  rus.forEach((item) => {
    item.classList.toggle('hidden');
  });
  cas.forEach((item) => {
    item.classList.toggle('hidden');
  });
  if (rus[0].classList.contains('hidden')) {
    localStorage.removeItem('lang');
  }
});
if (localStorage.getItem('lang') === 'changed') {
  eng.forEach((item) => {
    item.classList.toggle('hidden');
  });
  rus.forEach((item) => {
    item.classList.toggle('hidden');
  });
  cas.forEach((item) => {
    item.classList.toggle('hidden');
  });
}

const area = document.querySelector('#textarea');
const btnsService = document.querySelectorAll('.service');
const btnsBasic = document.querySelectorAll('.basic');
const caseUp = document.querySelectorAll('.caseUp');
const caseDown = document.querySelectorAll('.caseDown');

// basic btns in textarea by click
btnsBasic.forEach((element) => {
  element.addEventListener('click', (event) => {
    area.focus();
    area.value += event.target.innerHTML;
  });
});
// service btns in textarea by click
btnsService.forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    area.focus();
    if (event.target.innerHTML === '⟵') {
      const newInner = area.value.slice(0, -1);
      area.value = newInner;
    } else if (event.target.innerHTML === 'Enter') {
      area.value += '\n';
    } else if (event.target.innerHTML === '⇧' || event.target.innerHTML === '⇧ Shift') {
      caseUp.forEach((item) => {
        item.classList.toggle('hidden');
      });
      caseDown.forEach((item) => {
        item.classList.toggle('hidden');
      });
    } else if (event.target.innerHTML === '⇪ Caps') {
      caseUp.forEach((item) => {
        item.classList.toggle('hidden');
      });
      caseDown.forEach((item) => {
        item.classList.toggle('hidden');
      });
    } else if (event.target.innerHTML === '⇥ Tab') {
      area.value += '    ';
    } else if (event.target.innerHTML === '▲' || event.target.innerHTML === '◄' || event.target.innerHTML === '▼' || event.target.innerHTML === '►') {
      area.value += event.target.innerHTML;
    }
  });
});
btnsService.forEach((element) => {
  element.addEventListener('mouseup', (event) => {
    area.focus();
    if (event.target.innerHTML === '⇧' || event.target.innerHTML === '⇧ Shift') {
      caseUp.forEach((item) => {
        item.classList.toggle('hidden');
      });
      caseDown.forEach((item) => {
        item.classList.toggle('hidden');
      });
    }
  });
});

// btns in textarea by key
document.addEventListener('keydown', (event) => {
  area.focus();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    caseUp.forEach((item) => {
      item.classList.toggle('hidden');
    });
    caseDown.forEach((item) => {
      item.classList.toggle('hidden');
    });
  } else if (event.code === 'CapsLock') {
    caseUp.forEach((item) => {
      item.classList.toggle('hidden');
    });
    caseDown.forEach((item) => {
      item.classList.toggle('hidden');
    });
  } else if (event.code === 'Tab') {
    event.preventDefault();
    area.value += '    ';
  } else if (event.code === 'ControlLeft' || event.code === 'AltLeft' || event.code === 'MetaLeft' || event.code === 'MetaRight' || event.code === 'AltRight' || event.code === 'Enter' || event.code === 'Backspace') {
    area.value += '';
  } else if (localStorage.getItem('lang') === 'changed' && document.querySelector(`.${event.code} .rus .caseDown`).classList.contains('hidden')) {
    event.preventDefault();
    area.value += document.querySelector(`.${event.code} .rus .caseUp`).innerHTML;
  } else if (localStorage.getItem('lang') === 'changed') {
    event.preventDefault();
    area.value += document.querySelector(`.${event.code} .rus .caseDown`).innerHTML;
  } else if (document.querySelector(`.${event.code} .eng .caseDown`).classList.contains('hidden')) {
    event.preventDefault();
    area.value += document.querySelector(`.${event.code} .eng .caseUp`).innerHTML;
  } else {
    event.preventDefault();
    area.value += document.querySelector(`.${event.code} .eng .caseDown`).innerHTML;
  }
});
// caps
document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    caseUp.forEach((item) => {
      item.classList.toggle('hidden');
    });
    caseDown.forEach((item) => {
      item.classList.toggle('hidden');
    });
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    caseUp.forEach((item) => {
      item.classList.toggle('hidden');
    });
    caseDown.forEach((item) => {
      item.classList.toggle('hidden');
    });
  }
});

// animation
document.addEventListener('keydown', (event) => {
  const { code } = event;
  document.querySelector(`.${code}`).classList.add('hover');
});
document.addEventListener('keyup', (event) => {
  const { code } = event;
  document.querySelector(`.${code}`).classList.remove('hover');
});
