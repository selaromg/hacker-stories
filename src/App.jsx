import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
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



class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}


const robin = new Person('Robin', 'Wieruch');

{/*parent/root component*/}
const App = () => {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />

      <ul>
        {list.map(function (item) {
          return <li key={item.objectID}><a href={item.url}>{item.title}</a> {item.author}</li>
        })}
      </ul>

      <ul>
        {list.map(function(item, index) {
          return (
            <li key={index}>
              {item.title}
            </li>
          );
        })}
      </ul>

      <ul>
        {list.map(function(item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author}</span>
              <span> {item.num_comments}</span>
              <span> {item.points}</span>
            </li>
          );
        })}
      </ul>


      <ul>
        <li>{robin.getName()}</li>
      </ul>

      <List />
      <List />
    </div>
  )
}

{/*child component to app sibling to search*/}
const List = () => {
  return (
    <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
          </li>
        )
      })}
    </ul>
  )
}

{/*child component to app sibling to list*/}
const Search = () => {
  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id='search' type="text" />
    </div>
  )
}

{/*Both search and list are considered leaf components because they do not render anything*/}
{/*Each component represents a single unit in the application, making it maintainable and predictable*/}


export default App
