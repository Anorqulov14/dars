function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Kitchen Error!");
      resolve("Order taken");
    }, 1000);
  });
}

function prepareFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Kitchen Error!");
      resolve("Food prepared");
    }, 2000);
  });
}

function serveFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Kitchen Error!");
      resolve("Food served");
    }, 1000);
  });
}

takeOrder()
  .then(res => {
    console.log(res);
    return prepareFood();
  })
  .then(res => {
    console.log(res);
    return serveFood();
  })
  .then(res => console.log(res))
  .catch(err => console.error("xato", err));




  async function startProcess() {
  try {
    const order = await takeOrder();
    console.log(order);

    const food = await prepareFood();
    console.log(food);

    const served = await serveFood();
    console.log(served);

    console.log("All done!");
  } catch (error) {
    console.error("xato", error);
  }
}

startProcess();
