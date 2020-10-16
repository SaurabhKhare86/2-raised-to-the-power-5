// cerner_2^5_2020

// A promise that always resolves
const work = () => new Promise((resolve, reject) => resolve("resolve"));

// A promise that always rejects
const play = () => new Promise((resolve, reject) => reject("reject"));


work()
    .then(() =>
        play()
            .catch((exception) => console.log(`Caught the exception ${exception}`)) // Catch the exception thrown from play
            .then(() => console.log("Inside then function"))                        // Will this execute?
            .catch((exception) => console.log(`Caught the exception ${exception}`)) // OR Will this execute?
    );
