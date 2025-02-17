// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
//
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>Mashed Potatoes ready!</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// getInstruction(patates, index, getInstructions(patates, index2, getInstr))

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>Steak is ready!</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await
// ...

makeBroccoli();
async function makeBroccoli() {
  const broc = document.querySelector("#broccoli");
  // ... Your code here
  try {
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    broc.innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
    broc.innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    console.log("Good job, your meal is ready");
  } catch (error) {
    console.log("Some error dude: ", error);
  }
}

// Bonus 2 - Promise all
// ...
// const brusselList = document.getElementById("brusselsSprouts");

// const promises = [
//   obtainInstruction("brusselsSprouts", 0),
//   obtainInstruction("brusselsSprouts", 1),
//   obtainInstruction("brusselsSprouts", 2),
//   obtainInstruction("brusselsSprouts", 3),
//   obtainInstruction("brusselsSprouts", 4),
//   obtainInstruction("brusselsSprouts", 5),
//   obtainInstruction("brusselsSprouts", 6),
//   obtainInstruction("brusselsSprouts", 7),
// ];

// Promise.all(
//   brusselsSprouts.map((el, i) => {
//     return obtainInstruction("brusselsSprouts", i + 1);
//   })
// )
//   .then((arrayOfMessages) => {
//     console.log(arrayOfMessages);
//     arrayOfMessages.forEach((message) => {
//       const li = document.createElement("li");
//       li.textContent = message;
//       brusselList.append(li);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//     const li = document.createElement("li");
//     li.textContent = "An error has occured!";
//     brusselList.append(li);
//   })
//   .finally(() => {
//     const li = document.createElement("li");
//     li.textContent = "Brussels are ready!";
//     brusselList.append(li);
//   });

const brusselList = document.getElementById("brusselsSprouts");

const arrayOfPromises = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
];

Promise.all(arrayOfPromises)
  .then((arrayOfMessages) => {
    console.log(arrayOfMessages);
    arrayOfMessages.forEach((message) => {
      const li = document.createElement("li");
      li.textContent = message;
      brusselList.append(li);
    });
  })
  .catch((error) => {
    console.log(error);
  });
