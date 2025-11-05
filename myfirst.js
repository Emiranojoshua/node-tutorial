function myFunction() {
  return new Promise((resolve, reject) => {
    const val = false;
    if (val) {
      resolve("resolved successfully");
    }
    reject("rejected failed");
  });
}

myFunction()
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

async function init() {
  try {
    let res = await fetch("url");
    let result = await res.json();
    console.log(result);
  } catch (error) {
    console.log("something went wrong");
  }
}

init();
