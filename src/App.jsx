import * as React from 'react';


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}




{/*parent/root component*/}
const App = () => {

  const robin = new Person('Robin', 'Wieruch');

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Ambrov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'Gigi',
      url: 'https://github.com/selaromg',
      author: 'Gigi Morales',
      num_comments: 0,
      points: 10,
      objectID: 2,
    }
  ];

  const[searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>

      <hr />


      <ul>
        <li>{robin.getName()}</li>
      </ul>

      <List list={stories} />
    </div>
  );
};

{/*child component to app sibling to search*/}
const List = (props) => (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span> {props.item.author}</span>
    <span> {props.item.num_comments}</span>
    <span> {props.item.points}</span>
  </li>
)
  


{/*child component to app sibling to list*/}
const Search = (props) => {

    <div>
    <label htmlFor="search">Search: </label>
    <input id='search' type="text" onChange={props.onSearch}/>
    </div>
};
{/*Both search and list are considered leaf components because they do not render anything*/}
{/*Each component represents a single unit in the application, making it maintainable and predictable*/}


{/* Block Body:

function Search(item) {
  return (
    //function
  )
}}
*/}

{/*Concise Body:

const Search = (item) =>
  //function


  an implicit return statement is attached
*/}

export default App
