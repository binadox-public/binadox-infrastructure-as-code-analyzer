const core = require('@actions/core');
const github = require('@actions/github');


async function sendToBinadox(url, token, data) {
  
    const res = await fetch(url ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'ApiToken ' + token,
        },
        body: JSON.stringify(data)
    })
    
    if (res.ok) {
        core.setOutput("status", "Request sent");
      } else {
        core.setFailed("Request failed: status = " + res.status + ", " + res.statusText);
      }
    
}

try {
  
  const binadoxServerUrl = core.getInput('binadox-server-url');
  const binadoxToken = core.getInput('binadox-secret-token');
  const binadoxProject = core.getInput('binadox-project-name');

  core.setOutput("binadoxToken " + binadoxToken)

  const data = {
    'project': binadoxProject,
    'github_data': github.context
  }

  sendToBinadox(binadoxServerUrl, binadoxToken, data)  
  const payload = JSON.stringify(github.context, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
