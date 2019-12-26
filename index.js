/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
import axios from 'axios';

const title = 'This is the H1';
const message = 'this is the Paragraf';

const newDiv = document.createElement('div');

const createLi = (user) => {
  const li = document.createElement('li');
  // add user details to `li`
  li.textContent = `${user.id}`;
  return li;
};

const appendToDOM = (users) => {
  const ul = document.querySelector('ul');
  users.map((user) => {
    ul.appendChild(createLi(user));
  });
};

const fetchUsers = async () => {
  const users = await axios.get('https://api.github.com/users/valdezcervera/repos');
  appendToDOM(users.data);
};

fetchUsers();

const page = {
  render: () => {
    const view = /* html */ `
    <h1 class="title --bg-color-red" id="title">${title}</h1>
      <article class="article --bg-color-hotpink" id="article">
          <header class="header --bg-color-purple" id="article">
            <p class="paragraf" id="paragraf"></p>
              <ul>
              </ul>
            <p class="paragraf2" id="paragraf2">${message} 2</p>
            <div class="emoji-women-holding-hands">emoji here</div>
          </header>
      </article>
  `;
    return view;
  },
};

newDiv.innerHTML = page.render();
newDiv.className = 'container grid';

const rootDiv = document.getElementById('root');
rootDiv.append(newDiv);
