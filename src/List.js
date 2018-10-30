import React from 'react';

const List = props => ( //function or react component with props parameter
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
       /* loop through whatever it is that is passed into the List component item using map, and return each item as a list(<li></li>) the index of the item will be automatically generated and it will be used as the key. */ 
    }
  </ul>
);

export default List;