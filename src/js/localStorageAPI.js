function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    if (data === null) {
      console.log(
        `The data with the key: "${key}" was not found in Local Storage`
      );
      return null;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error(
      `An error occurred when trying to read data from Local Starage ${e}`
    );
    return null;
  }
}
