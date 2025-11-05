function myFunction() {
  return new Promise((resolve, reject) => {
    const val = false;
    if (val) {
      resolve("resolved successfully");
    }
    reject("rejected failed");
  });
}

myFunction().then((value) => console.log(value)).catch(err => console.log(err));

