#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.bold.blue("Welcome to the project! Object Oriented"));
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.bold.yellow("Whom would you like to interact with?"),
            choices: ["staff", "student", "exit"],
        });
        if (ans.select == "staff") {
            console.log(chalk.bold.bgCyan("You approach the staff room. Please feel free to ask any question."));
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.bold.yellow("Enter the student's name you want to engage with:"),
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.cyan(`Hello i am ${name.name}. Nice to meet you!`));
                console.log(chalk.bold.cyan("New student added"));
                console.log(chalk.bold.cyan("Current student list:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.cyan(`Hello i am ${student.name}. Nice to see you again!`));
                console.log(chalk.bold.red("Existing student list:"));
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.bold.red("Exiting the program..."));
            process.exit();
        }
    } while (true);
};
programStart(persons);
