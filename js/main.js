'use strict';

{
  // function update() {
  //   document.querySelector('p').textContent = 'Changed!';
  //   document.querySelectorAll('p')[1].textContent = 'Changed!';
  //   document.querySelectorAll('p').forEach((p, index) => {
  //     p.textContent = `${index}番目のpです！`;
  //   });
  // }

  document.querySelector('button').addEventListener('click', ()=>{

    const colors=document.querySelectorAll('input');
    let selectedColor;

    colors.forEach(color=>{
      if (color.checked===true){
        selectedColor=color.value;
      }
    });

    const li= document.createElement('li');
    li.textContent=selectedColor;
    document.querySelector('ul').appendChild(li);

    // const li=document.createElement('li');
    // const color=document.querySelector('select');
    // li.textContent=`${color.value}-${color.selectedIndex}`;
    // document.querySelector('ul').appendChild(li);
    // const li=document.createElement('li');
    // const text=document.querySelector('input');
    // li.textContent=text.value;
    // document.querySelector('ul').appendChild(li);

    // text.value='';
    // text.focus();

    // const item1=document.querySelectorAll('li')[1];
    // item1.remove();
    // document;querySelector('ul').removeChild(item1);
    // const item0 = document.querySelectorAll('li')[0];
    // const copy = item0.cloneNode(true);

    // const ul=document.querySelector('ul');
    // const item2=document.querySelectorAll('li')[2];
    // ul.insertBefore(copy,item2);

    // const item2=document.createElement('li');
    // item2.textContent= 'item 2';

    // const ulNode=document.querySelector('ul');
    // const ul=document.querySelector('ul');
    // ul.appendChild(item2);



    // const targetNode=document.getElementById('target');

    // targetNode.textContent=targetNode.dataset.translation;

    // document.getElementById('target').textContent = 'Changed!';
    // document.getElementById('target').title = 'This is title!';
    // targetNode.textContent = 'Changed!';
    // targetNode.title = 'This is title!';
    // targetNode.className='my-color my-border'; 
    // targetNode.classList.add('my-color'); 
    // if(targetNode.classList.contains('my-color')===true){
    //   targetNode.classList.remove('my-color');
    // }else{
    //   targetNode.classList.add('my-color');
    // }
    // targetNode.classList.toggle('my-color')
  });
  // setTimeout(update, 1000);
}