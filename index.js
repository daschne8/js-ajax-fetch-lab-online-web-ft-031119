const baseURL = 'https://api.github.com';
const user = 'daschne8';
// const token = "e11df44e1236b7666cdf49fb11f3cd33d3d69b67"


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "76477e1f87bebbe859333ab9f91739f7385ebc88";
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  let test = fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    return test
    // .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
