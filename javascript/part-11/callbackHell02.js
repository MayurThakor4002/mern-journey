// Function to simulate saving data to a database
function savetoDb(data, success, failure) {
    // Simulate internet connection strength (random number between 1 and 10)
    let internet = Math.floor(Math.random() * 10) + 1;
    console.log("data name is ", data);
  
    // If internet strength is greater than 5, call the success callback
    if (internet > 5) {
      success();
    } else {
      // Otherwise, call the failure callback
      failure();
    }
  }
  
  // Start the chain of saving data to the database
  savetoDb(
    "Apana college",
    () => {
      // Success callback for "Apana college"
      console.log("success1: data saved to db");
      savetoDb(
        "hello world",
        () => {
          // Success callback for "hello world"
          console.log("success2: data saved to db");
          savetoDb(
            "code with harry",
            () => {
              // Success callback for "code with harry"
              console.log("success3: data saved to db");
              savetoDb(
                "mayur thakor",
                () => {
                  // Success callback for "mayur thakor"
                  console.log("success4: data saved to db");
                },
                () => {
                  // Failure callback for "mayur thakor"
                  console.log("failure4: weak connection, data not saved to db");
                }
              );
            },
            () => {
              // Failure callback for "code with harry"
              console.log("failure3: weak connection, data not saved to db");
            }
          );
        },
        () => {
          // Failure callback for "hello world"
          console.log("failure2: weak connection, data not saved to db");
        }
      );
    },
    () => {
      // Failure callback for "Apana college"
      console.log("failure1: weak connection, data not saved to db");
    }
  );

  console.log("----------------------------");
// function savetoDb(data, success, failure) {
//   let internet = Math.floor(Math.random() * 10) + 1;
//   console.log("data name is ", data);
//   if (internet > 5) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Apana college",
//   () => {
//     console.log("success1: data saved to db");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2: data saved to db");
//         savetoDb(
//           "code with harry",
//           () => {
//             console.log("success3: data saved to db");
//             savetoDb(
//               "mayur thakor",
//               () => {
//                 console.log("success4: data saved to db");
//               },
//               () => {
//                 console.log("failure4: weak connection, data not saved to dn");
//               }
//             );
//           },
//           () => {
//             console.log("failure3: weak connection, data not saved to db");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection, data not saved to db");
//       }
//     );
//   },
//   () => {
//     console.log("failure1: weak connection, data not saved to db");
//   }
// );
