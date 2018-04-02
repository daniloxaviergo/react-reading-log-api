export const INDEX = 'INDEX'
export function index(projects) {
  const action = {
    type: INDEX,
    projects
  }

  return action
}

export const LOG_INDEX = 'LOG_INDEX'
export function logIndex(logs) {
  const action = {
    type: LOG_INDEX,
    logs
  }

  return action
}

// export const LOG_INDEX = LOG_INDEX
// export logIndex

// export function show(project) {
//   const action = {
//     type: SHOW,
//     project
//   }

//   return action
// }

// function getProjects(projects) {
//   const action = {
//     type: INDEX,
//     projects
//   }

//   return action
// }

// function fetchProjects() {
//   return fetch("http://localhost:3001/v1/projects.json", {
//     method: 'GET',
//     mode: 'cors'
//   }).then(response=> response.json())
// }

// export function index() {
//   return function(dispatch) {
//     return fetchProjects().then(json => dispatch(getProjects(json)))
//   }
// }

// function getProject(project) {
//   const action = {
//     type: SHOW,
//     project
//   }

//   return action
// }

// function fetchProject(id) {
//   return fetch(`http://localhost:3001/v1/projects/${id}.json`, {
//     method: 'GET',
//     mode: 'cors'
//   }).then(response=> response.json())
// }

// export function show(id) {
//   return function(dispatch) {
//     return fetchProject(id).then(json => dispatch(getProject(json)))
//   }
// }