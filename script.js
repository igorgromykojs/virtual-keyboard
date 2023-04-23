let arr1 = [{"name":"IntlBackslash","key":"\§","shiftKeyEN":"±","keyRU":">","shiftKeyRU":"<","group":"basic"}, {"name":"Digit1","key":"1","shiftKeyEN":"!","keyRU":"1","shiftKeyRU":"!","group":"basic"}, {"name":"Digit2","key":"2","shiftKeyEN":"@","keyRU":"2","shiftKeyRU":"\"","group":"basic"}, {"name":"Digit3","key":"3","shiftKeyEN":"#","keyRU":"3","shiftKeyRU":"№","group":"basic"},{"name":"Digit4","key":"4","shiftKeyEN":"$","keyRU":"4","shiftKeyRU":";","group":"basic"},{"name":"Digit5","key":"5","shiftKeyEN":"%","keyRU":"5","shiftKeyRU":"%","group":"basic"},{"name":"Digit6","key":"6","shiftKeyEN":"^","keyRU":"6","shiftKeyRU":":","group":"basic"},{"name":"Digit7","key":"7","shiftKeyEN":"&","keyRU":"7","shiftKeyRU":"?","group":"basic"},{"name":"Digit8","key":"8","shiftKeyEN":"*","keyRU":"8","shiftKeyRU":"*","group":"basic"},{"name":"Digit9","key":"9","shiftKeyEN":"(","keyRU":"9","shiftKeyRU":"(","group":"basic"},{"name":"Digit0","key":"0","shiftKeyEN":")","keyRU":"0","shiftKeyRU":")","group":"basic"},{"name":"Minus","key":"-","shiftKeyEN":"_","keyRU":"-","shiftKeyRU":"_","group":"basic"},{"name":"Equal","key":"=","shiftKeyEN":"+","keyRU":"=","shiftKeyRU":"+","group":"basic"},{"name":"Backspace","key":"⟵","shiftKeyEN":"⟵","keyRU":"⟵","shiftKeyRU":"⟵","group":"service"}];
let arr2 = [{"name":"Tab","key":"⇥ Tab","shiftKeyEN":"⇥ Tab","keyRU":"⇥ Tab","shiftKeyRU":"⇥ Tab","group":"service"},{"name":"KeyQ","key":"q","shiftKeyEN":"Q","keyRU":"й","shiftKeyRU":"Й","group":"basic"},{"name":"KeyW","key":"w","shiftKeyEN":"W","keyRU":"ц","shiftKeyRU":"Ц","group":"basic"},{"name":"KeyE","key":"e","shiftKeyEN":"E","keyRU":"у","shiftKeyRU":"У","group":"basic"},{"name":"KeyR","key":"r","shiftKeyEN":"R","keyRU":"к","shiftKeyRU":"К","group":"basic"},{"name":"KeyT","key":"t","shiftKeyEN":"T","keyRU":"е","shiftKeyRU":"Е","group":"basic"},{"name":"KeyY","key":"y","shiftKeyEN":"Y","keyRU":"н","shiftKeyRU":"Н","group":"basic"},{"name":"KeyU","key":"u","shiftKeyEN":"U","keyRU":"г","shiftKeyRU":"Г","group":"basic"},{"name":"KeyI","key":"i","shiftKeyEN":"I","keyRU":"ш","shiftKeyRU":"Ш","group":"basic"},{"name":"KeyO","key":"o","shiftKeyEN":"O","keyRU":"щ","shiftKeyRU":"Щ","group":"basic"}, {"name":"KeyP","key":"p","shiftKeyEN":"P","keyRU":"з","shiftKeyRU":"З","group":"basic"}, {"name":"BracketLeft","key":"[","shiftKeyEN":"{","keyRU":"х","shiftKeyRU":"Х","group":"basic"}, {"name":"BracketRight","key":"]","shiftKeyEN":"}","keyRU":"ъ","shiftKeyRU":"Ъ","group":"basic"},{"name":"Enter","key":"Enter","shiftKeyEN":"Enter","keyRU":"Enter","shiftKeyRU":"Enter","group":"service"}];
let arr3 = [{"name":"CapsLock","key":"⇪ Caps","shiftKeyEN":"⇪ Caps","keyRU":"⇪ Caps","shiftKeyRU":"⇪ Caps","group":"service"},{"name":"KeyA","key":"a","shiftKeyEN":"A","keyRU":"ф","shiftKeyRU":"Ф","group":"basic"},{"name":"KeyS","key":"s","shiftKeyEN":"S","keyRU":"ы","shiftKeyRU":"Ы","group":"basic"},{"name":"KeyD","key":"d","shiftKeyEN":"D","keyRU":"в","shiftKeyRU":"В","group":"basic"},{"name":"KeyF","key":"f","shiftKeyEN":"F","keyRU":"а","shiftKeyRU":"А","group":"basic"},{"name":"KeyG","key":"g","shiftKeyEN":"G","keyRU":"п","shiftKeyRU":"П","group":"basic"},{"name":"KeyH","key":"h","shiftKeyEN":"H","keyRU":"р","shiftKeyRU":"Р","group":"basic"},{"name":"KeyJ","key":"j","shiftKeyEN":"J","keyRU":"о","shiftKeyRU":"О","group":"basic"},{"name":"KeyK","key":"k","shiftKeyEN":"K","keyRU":"л","shiftKeyRU":"Л","group":"basic"},{"name":"KeyL","key":"l","shiftKeyEN":"L","keyRU":"д","shiftKeyRU":"Д","group":"basic"},{"name":"Semicolon","key":";","shiftKeyEN":":","keyRU":"ж","shiftKeyRU":"Ж","group":"basic"},{"name":"Quote","key":"\'","shiftKeyEN":"\\","keyRU":"э","shiftKeyRU":"Э","group":"basic"}, {"name":"Backslash","key":"\\","shiftKeyEN":"|","keyRU":"ё","shiftKeyRU":"Ё","group":"basic"},{"name":"Enter","key":"Enter","shiftKeyEN":"Enter","keyRU":"Enter","shiftKeyRU":"Enter","group":"service"}];
let arr4 = [{"name":"ShiftLeft","key":"⇧","shiftKeyEN":"⇧","keyRU":"⇧","shiftKeyRU":"⇧","group":"service"},{"name":"Backquote","key":"`","shiftKeyEN":"~","keyRU":"]","shiftKeyRU":"[>>","group":"basic"},{"name":"KeyZ","key":"z","shiftKeyEN":"Z","keyRU":"я","shiftKeyRU":"Я","group":"basic"},{"name":"KeyX","key":"x","shiftKeyEN":"X","keyRU":"ч","shiftKeyRU":"Ч","group":"basic"},{"name":"KeyC","key":"c","shiftKeyEN":"C","keyRU":"с","shiftKeyRU":"С","group":"basic"},{"name":"KeyV","key":"v","shiftKeyEN":"V","keyRU":"м","shiftKeyRU":"М","group":"basic"},{"name":"KeyB","key":"b","shiftKeyEN":"B","keyRU":"и","shiftKeyRU":"И","group":"basic"},{"name":"KeyN","key":"n","shiftKeyEN":"N","keyRU":"т","shiftKeyRU":"Т","group":"basic"},{"name":"KeyM","key":"m","shiftKeyEN":"M","keyRU":"ь","shiftKeyRU":"Ь","group":"basic"},{"name":"Comma","key":",","shiftKeyEN":"<","keyRU":"б","shiftKeyRU":"Б","group":"basic"},{"name":"Period","key":".","shiftKeyEN":">","keyRU":"ю","shiftKeyRU":"Ю","group":"basic"},{"name":"Slash","key":"/","shiftKeyEN":"?","keyRU":".","shiftKeyRU":",","group":"basic"},{"name":"ArrowUp","key":"▲","shiftKeyEN":"▲","keyRU":"▲","shiftKeyRU":"▲","group":"service"},{"name":"ShiftRight","key":"⇧ Shift","shiftKeyEN":"⇧ Shift","keyRU":"⇧ Shift","shiftKeyRU":"⇧ Shift","group":"service"}];
let arr5 = [{"name":"Fn","key":"fn","shiftKeyEN":"fn","keyRU":"fn","shiftKeyRU":"fn","group":"service"},{"name":"ControlLeft","key":"Ctrl","shiftKeyEN":"Ctrl","keyRU":"Ctrl","shiftKeyRU":"Ctrl","group":"service"},{"name":"AltLeft","key":"Opt","shiftKeyEN":"Opt","keyRU":"Opt","shiftKeyRU":"Opt","group":"service"},{"name":"MetaLeft","key":"Com","shiftKeyEN":"Com","keyRU":"Com","shiftKeyRU":"Com","group":"service"},{"name":"Space","key":" ","shiftKeyEN":" ","keyRU":" ","shiftKeyRU":" ","group":"basic"},{"name":"MetaRight","key":"Com","shiftKeyEN":"Com","keyRU":"Com","shiftKeyRU":"Com","group":"service"},{"name":"AltLeft","key":"Opt","shiftKeyEN":"Opt","keyRU":"Opt","shiftKeyRU":"Opt","group":"service"},{"name":"ArrowLeft","key":"◄","shiftKeyEN":"◄","keyRU":"◄","shiftKeyRU":"◄","group":"service"},{"name":"ArrowDown","key":"▼","shiftKeyEN":"▼","keyRU":"▼","shiftKeyRU":"▼","group":"service"},{"name":"ArrowRight","key":"►","shiftKeyEN":"►","keyRU":"►","shiftKeyRU":"►","group":"service"}];

let mainDiv = document.createElement('div');
      mainDiv.className ="centralizer";
      mainDiv.innerHTML = `<p class="title">RSS Виртуальная клавиатура</p>
      <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea>
      <div class="body--keyboard keyboard" id="keyboard">
      <div class="keyboard--row 1 row"></div>
      <div class="keyboard--row 2 row"></div>
      <div class="keyboard--row 3 row"></div>
      <div class="keyboard--row 4 row"></div>
      <div class="keyboard--row 5 row"></div>
      </div>
        <p class="description">Клавиатура создана в операционной системе Windows</p>
        <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>`;

document.body.append(mainDiv);

class Btn {
  constructor(name, key, shiftKeyEN, keyRU, shiftKeyRU, group){
    this.name = name;
    this.key = key;
    this.shiftKeyEN = shiftKeyEN;
    this.keyRU = keyRU;
    this.shiftKeyRU = shiftKeyRU;
    this.group = group;
  }
  render (line) {
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
function createHtml (arr, line){
  for (let i = 0; i< arr.length; i++) {
    new Btn(arr[i].name, arr[i].key, arr[i].shiftKeyEN, arr[i].keyRU, arr[i].shiftKeyRU, arr[i].group).render(line);
  }
}
createHtml(arr1, 0);
createHtml(arr2, 1);
createHtml(arr3, 2);
createHtml(arr4, 3);
createHtml(arr5, 4);


const area = document.querySelector("#textarea");
const btns = document.querySelectorAll(".key");
btns.forEach(element => {
  element.addEventListener('click', () => {
    area.innerHTML+=event.target.innerHTML;
  });
});
document.addEventListener ('keydown', () => {
  if (event.key == "Backspace") {
    console.log('ok');
    area.innerHTML.substring(0, area.innerHTML.length - 1);
  } else {
    area.innerHTML+=event.key;
  }
});


// Language
const fn = document.querySelector(".Fn");
const rus = document.querySelectorAll(".rus");
const eng = document.querySelectorAll(".eng");
const cas = document.querySelectorAll(".caseDown");
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
    // if (localStorage.getItem('lang') != 'changed') {
    //   localStorage.removeItem('lang'); 
    // }
    
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
  //                          
} 



document.addEventListener ('keydown', () => {
  console.log(event.code);
});

fn.addEventListener('click', () => {

});







     
