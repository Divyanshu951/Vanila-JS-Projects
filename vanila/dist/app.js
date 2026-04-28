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
interpolateComment(1, "hello", [1, 2, 3, 4]);
//# sourceMappingURL=app.js.map