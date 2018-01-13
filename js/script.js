/**
 * JS
 */

/* eslint-disable */

function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => dataGen.next(data));
}

function* steps() {
  console.log('Fetching harry');
  const harry = yield ajax('https://api.github.com/users/IamManchanda');
  console.log(harry);
  console.log('\n');

  console.log('Fetching wes');
  const wes = yield ajax('https://api.github.com/users/wesbos');
  console.log(wes);
  console.log('\n');

  console.log('Fetching fatJoe');
  const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
  console.log(fatJoe);
  console.log('\n');
}

const dataGen = steps();
dataGen.next();