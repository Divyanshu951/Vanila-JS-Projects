// function calculateTotal(price: number, quantity: number, discount: number) {
//   return price * quantity - (1 - discount);
// }
import { resolveTypeReferenceDirective } from "typescript";
// // console.log(calculateTotal(200, 10, -100));
// function getMessage(isAdmin: boolean) {
//   console.log("hello");
//   return "isAdmin";
// }
// // console.log(getMessage(true));
// type GetMessage = (isAdmin: boolean) => void;
// function fun1(getMessage: GetMessage) {
//   console.log(getMessage(true));
//   return "Completed";
// }
// console.log(fun1(getMessage));
// function greet(name: string) {
//   return "Hello " + name;
// }
// function fun(param: string | number) {
//   if (typeof param === "string") return param.toUpperCase();
// }
function getTicketInfo(id) {
    // type narrowing
    if (typeof id === "string") {
        // This is like telling TS trust me this will not be undefined
        // const parsedID = id.split("-")[1]!;
        const parsedID = id.split("-")[1];
        if (parsedID) {
            const numberID = parseInt(parsedID);
            return `Processing ticket ${numberID}.`;
        }
    }
    return `Processing ticket ${id}.`;
}
// console.log(getTicketInfo("Sys-123"));
// optional param
function calculateApiCost(numRequest, tier = "String") {
    if (tier === "pro") {
        return numRequest * 0.05;
    }
    if (tier === "enterprise") {
        return numRequest * 0.03;
    }
    return numRequest * 0.1;
}
// console.log(calculateApiCost(2000));
function estimateResponseTime(promptLength = 100, modelType = "text") {
    let baseNumber = 0;
    let rateNumber = 0;
    if (modelType === "text") {
        baseNumber = 2;
        rateNumber = 0.01;
    }
    else if (modelType === "image") {
        baseNumber = 5;
        rateNumber = 0.02;
    }
    else if (modelType === "code") {
        baseNumber = 3;
        rateNumber = 0.05;
    }
    return Math.round(baseNumber * rateNumber * promptLength);
}
function move(direction) {
    console.log(direction);
}
function setPriority(level) {
    switch (level) {
        case "low":
            return 0;
        case "medium":
            return 1;
        case "high":
            return 2;
        case "critical":
            return 3;
        default:
            return 0;
    }
}
// Arrays
const ratings = [1, 2, 3, 4, 5];
function averageScore(ratings) {
    // if (ratings.length === 0) return 0;
    // return ratings.reduce((sum, curr) => (sum += curr)) / ratings.length;
}
// console.log(averageScore(ratings));
function interpolateComment(id, comment, comments) {
    for (let i = 0; i < comments.length; i++) {
        if (comments[i] === id) {
            comments[i] = comment;
            break;
        }
    }
    console.log(comments);
}
// interpolateComment(1, "hello", [1, 2, 3, 4]);
function formatLabels(...labels) {
    if (labels.length === 0)
        return "No labels";
    if (labels.length === 1)
        return `Labels: ${labels[0]}`;
    return `Labels: ${labels.join(", ")}`;
}
function processMail(mail) {
    return `  FROM: ${mail.from}
  TO: ${mail.to.join(", ")}
  SUBJECT: ${mail.subject}
  BODY: ${mail.body}`;
}
let newUser = { ad1: "Hyderabad", ad2: "India", zipcode: 500069 };
function isCorrect(lesson) {
    if (lesson.kind === "multiple-choice") {
        return lesson.studentAnswer === lesson.correctAnswer;
    }
    else {
        return lesson.studentCode === lesson.solutionCode;
    }
}
// Sets
const strArr = ["one", "two", "three"];
function findNumUniqueLabels(formattedArr) {
    const set = new Set(strArr);
    return set.size;
}
// readonly things
// that as const makes the arr readonly
const arr = ["apple", "banana", "grapes"];
const a = { name: "John", age: 23 };
const user = {
    name: "John",
    age: 26,
};
// tuples
// A specific kind of array that has fixed structure, specific known type
const tuple = ["String", 69, true];
tuple.push("This can also be done ");
// console.log(tuple);
// console.log(tuple);
function createTicket(prevTicket, comment) {
    return [++prevTicket, comment, comment.toLowerCase().includes("critical")];
}
const [ticket, comment, yes] = createTicket(12, "i contain critical");
// console.log(ticket, comment, yes);
const objTuple = { prop1: 1, prop2: "two" };
const location = { lat: 72.0, lan: 73.0 };
const tuple3 = [234, "Nope"];
const testDetails = ["John", 1, 2, 34];
// console.log(testDetails);
function tokenSize(input) {
    const values = input.split(" ");
    // console.log(values);
    return [values.length / 100, ...values];
}
const hunter = {
    id: 1234,
    name: "Steve",
    tasks: ["Nothing", "Nothing again"],
    directReport: [234, 343],
};
//# sourceMappingURL=app.js.map