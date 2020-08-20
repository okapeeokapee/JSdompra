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
    const targetNode=document.getElementById('target')

    // document.getElementById('target').textContent = 'Changed!';
    // document.getElementById('target').title = 'This is title!';
    targetNode.textContent = 'Changed!';
    targetNode.title = 'This is title!';
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue';
  });
  // setTimeout(update, 1000);
}