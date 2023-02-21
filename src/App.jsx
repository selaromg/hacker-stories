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
    url: 'www.github.com/selaromg',
    author: 'Gigi Morales',
    num_comments: 0,
    points: 10,
    objectID: 2,
  }
];

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id='search' type="text" />

      <hr />

      <ul>
        {list.map(function (item) {
          return <li><a href={item.url}>{item.title}</a> {item.author}</li>
        })}
      </ul>
    </div>
  )
}

export default App
