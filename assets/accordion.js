// function accordion({el, item = '[data-accordion]', activeClass = 'state--active'} = {}) {
//   const container = document.querySelector(el);
//   const items = container.querySelectorAll(item);
//   const onClick = ({currentTarget}) => {
//     currentTarget.classList.toggle(activeClass);
//     items.forEach(item => 
//       (item !== currentTarget) && item.classList.remove(activeClass)
//     );
//   }  
//   items.forEach(item => item.addEventListener('click', onClick));
// }

// const options = {
//   el:'.js-accordion'
// };

// accordion(options);
