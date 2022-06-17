let div = document.querySelector('.lesson1');
let textarea = document.createElement('textarea');
let text = div.textContent;
textarea.innerHTML = text;

document.body.addEventListener('keydown', (event) => {
        if(event.code == 'KeyE' && (event.ctrlKey || event.metaKey)){
            event.stopPropagation();
            event.preventDefault();
            div.replaceWith(textarea);
        }
        else if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)){
            event.stopPropagation();
            event.preventDefault();
            const str = textarea.value;
            div.textContent = str;
            textarea.replaceWith(div);
        }

         })




// let text = document.getElementById('text').textContent;

// document.body.addEventListener('keydown', (event) => {
//     if(event.key == 'e' && (event.ctrlKey || event.metaKey)) {
//         event.stopPropagation();
//         event.preventDefault();
//         document.body.innerHTML= '<textarea placeholder="test" id="textArea"></textarea>';
//         document.getElementById('textArea').value = text;
//         console.log(text);
//     }
 
//     else if (event.shiftKey == 'r' && (event.ctrlKey || event.metaKey)) {
//         event.stopPropagation();
//         event.preventDefault();
//         let str = document.getElementById('textArea').value ;
//         document.body.innerHTML= '<div class="lesson1"> <p id="text"> </p> </div>';
//         document.getElementsByTagName('text').value = str;
//         console.log(newText);
//     }
// })
