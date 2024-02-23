function setToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(
      `The data with the key: "${key}" was successfully written to Local Storage`
    );
  } catch (e) {
    consol.error(
      `An error occured when trying to write data to Local Storage: ${e}`
    );
  }
}

const name = 'Oleksandr';
const detailInfo = {
  age: 34,
  jobPosition: 'manager',
  email: 'oleks@gmail.com',
};

setToLocalStorage(name, detailInfo);

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

console.log('The data from Local Storage:', getFromLocalStorage(name));
