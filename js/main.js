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
    const item2=document.createElement('li');
    item2.textContent= 'item 2';

    const ulNode=document.querySelector('ul');
    const ul=document.querySelector('ul');
    ul.appendChild(item2);



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