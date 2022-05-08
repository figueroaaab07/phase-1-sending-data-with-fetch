// Add your code here
function submitData(userName, userEmail) {
  // const dataObj = {
  //   name: `${userName}`,
  //   email: `${userEmail}`,
  // };
  // const configurationFetch = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   // body: JSON.stringify(dataObj),
  //   body: JSON.stringify({
  //     name: `${userName}`,
  //     email: `${userEmail}`,
  //   }),
  // };
  return  fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
      // body: JSON.stringify(dataObj),
            body: JSON.stringify({
              name: `${userName}`,
              email: `${userEmail}`,
            }),
          })
          .then((response) => response.json())
          .then((object) => appendDataDOM(object.id))
          .catch((error) => appendDataDOM(error.message));
};

function appendDataDOM(data) {
  let dataContainer = document.createElement('div');
  dataContainer.textContent = data;
  // document.querySelector('body').appendChild(dataContainer);
  const script = document.querySelector('script[src="index.js"]');
  document.body.insertBefore(dataContainer, script);
}

submitData('Alejandro Figueroa', 'figueroaaab@gmail.com');