import inquirer from "inquirer";
const wordCount = (str) => {
    const word = str.split(" ");
    console.log(word.length);
};
const getInput = async () => {
    const userInput = await inquirer.prompt({
        type: 'input',
        name: 'input',
        message: "Enter input: "
    });
    await wordCount(userInput.input);
};
await getInput();
