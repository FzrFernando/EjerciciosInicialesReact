// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//   backgroundColor: 'black',
//   color: 'pink'
//   },
//   src: 'https://i.imgur.com/7vQD0fPs.jpg'
//   };
  
//   export default function TodoList() {
//   return (
//   <div style={person.theme}>
//     <h1>{person.name}'s Todos</h1>
//     <img
//       className="avatar"
//       src={person.src}
//       alt="Gregorio Y. Zara"
//     />
//     <ul>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   </div>
//   );
//   }

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// function Avatar({person, size}){
//   size='l';
//   return(
//   <div style={person.theme}>
//   <h1>{person.name}'s Todos</h1>
//   <img
//     className="avatar"
//     src={baseUrl + person.imageId + size +".jpg"}
//     alt={person.name}
//   />
//   <ul>
//     <li>Improve the videophone</li>
//     <li>Prepare aeronautics lectures</li>
//     <li>Work on the alcohol-fuelled engine</li>
//   </ul>
// </div>
//   )
// }

// export default function TodoList(props) {
// return (
// <Avatar {...props}/>
// );
// }

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      
    </div>
  );
}