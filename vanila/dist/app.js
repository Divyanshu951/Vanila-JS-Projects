// function calculateTotal(price: number, quantity: number, discount: number) {
//   return price * quantity - (1 - discount);
// }
import { ModifierFlags, resolveTypeReferenceDirective } from "typescript";
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
// never
// the var cannot have an value ever
function checkStatus(code) {
    if (code === 1) {
        return code;
    }
    if (code === 2) {
        return code;
    }
    if (code === 3) {
        return code;
    }
}
// now when you give a obj lets say SupportAgentUser you can use anyone SupportAgent or EndUser so all property of any one no overlapping property
const obj = {
    id: 23,
    role: "agent",
    assignedTickets: 21,
};
function getTicketCount(user) {
    if (user.role === "agent") {
        return user.assignedTickets;
    }
    return user.submittedTicket;
}
const ship1269 = {
    aircraftName: "Beatles23",
    serialNumber: 234,
    pilotAssigned: "Kevin",
    lastRepairedDayCount: 23,
};
// ENUM
// Not must useful
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 0] = "OK";
    StatusCode[StatusCode["Created"] = 1] = "Created";
    StatusCode[StatusCode["BadRequest"] = 2] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 3] = "Unauthorized";
    StatusCode[StatusCode["NotFound"] = 4] = "NotFound";
})(StatusCode || (StatusCode = {}));
var RequestSeverity;
(function (RequestSeverity) {
    RequestSeverity[RequestSeverity["Low"] = 0] = "Low";
    RequestSeverity[RequestSeverity["Medium"] = 1] = "Medium";
    RequestSeverity[RequestSeverity["High"] = 2] = "High";
    RequestSeverity[RequestSeverity["critical"] = 3] = "critical";
})(RequestSeverity || (RequestSeverity = {}));
function isCritical(request) {
    return request === RequestSeverity.critical;
}
function openTicket(customer) {
    if (customer.plan === "regular" && customer.aboveLimit)
        return -1;
    return (customer.tickets = 1);
}
// Unknown type
let varA;
let varB;
if (typeof varA === "string") {
    varA.toLowerCase();
}
function responseToSentiment(sentiment) {
    if (sentiment === "happy" || sentiment === "satisfied") {
        return handlePositiveSentiment(sentiment);
    }
    else if (sentiment === "dissatisfied" || sentiment === "angry") {
        return handleNegativeSentiment(sentiment);
    }
    return { message: "We don't understand.", notify: true };
}
function handlePositiveSentiment(sentiment) {
    return sentiment === "happy"
        ? { message: "Hooray!", notify: false }
        : { message: "We are glad.", notify: false };
}
function handleNegativeSentiment(sentiment) {
    return sentiment === "dissatisfied"
        ? { message: "We are sorry.", notify: false }
        : { message: "We apologize. A manager will contact you.", notify: true };
}
function isModelSkippity(model) {
    return ("search" in model &&
        (model.version === "3.5" || model.version === "4" || model.version === "4s"));
}
function countComplaints(chats) {
    let counts = { questions: 0, complaints: 0, upgrades: 0, refunds: 0 };
    for (const chat of chats) {
        counts = incrementCount(chat, counts);
    }
    return counts;
}
function incrementCount(chat, counts) {
    switch (chat.topic) {
        case "question":
            counts.questions++;
            return counts;
        case "complaint":
            counts.complaints++;
            return counts;
        case "refund":
            counts.refunds++;
            return counts;
        case "upgrade":
            counts.upgrades++;
            return counts;
        default:
            throw new Error(`Unhandled topic: ${chat.topic}`);
    }
}
function handleFeedback(feedback) {
    if (!feedback.rating || !isValidRating(feedback.rating))
        return "Give a rating between 1 and 5.";
    if (!feedback.email || !feedback.email.includes("@"))
        return "Provide a valid email address.";
    return `Thanks, ${getEmailUsername(feedback.email)}! Rating: ${ratingToString(feedback.rating)}`;
}
function getEmailUsername(email) {
    const atIndex = email.indexOf("@");
    return atIndex !== -1 ? email.slice(0, atIndex) : email;
}
function isValidRating(rating) {
    return (rating === 1 || rating === 2 || rating === 3 || rating === 4 || rating === 5);
}
function ratingToString(rating) {
    switch (rating) {
        case 1:
            return "Very Bad";
        case 2:
            return "Bad";
        case 3:
            return "Average";
        case 4:
            return "Good";
        case 5:
            return "Excellent";
    }
}
let v;
function updateUser(user) {
    if (user.id) {
        return "can't update id";
    }
    if (user.email) {
        return `updating email to ${user.email}`;
    }
    return "nothing to update";
}
export function addBillingInfo(info) {
    return `Email: ${info.email}, Phone: ${info.phoneNumber}`;
}
const karateScores = {
    "Ralph ": 60,
    "William ": 100,
    "Jackie Chan": 82,
};
// We can add any string key
karateScores["Pat Morita"] = 85;
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British" },
};
const waitingMessage = "Awaiting prompt";
const thinkingMessage = "Cooking";
const respondingMessage = "Sending response";
export function getStatusMessage(status) {
    const map = {
        waiting: waitingMessage,
        thinking: thinkingMessage,
        responding: respondingMessage,
    };
    return map[status];
}
export function stripID(user) {
    const { name, email, age } = user;
    return { name, email, age };
}
// Generics
function transform(inputs, update) {
    const outputs = [];
    for (const input of inputs) {
        const output = update(input);
        outputs.push(output);
    }
    return outputs;
}
function fn(input) {
    console.log("fn -", input);
    return input;
}
// console.log(transform<number, number>([1, 2, 3, 4, 5], fn));
function pair(a, b) {
    const sol = [];
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        sol.push([a[i], b[i]]);
    }
    return sol;
}
const ArrA = ["lane", "hunter", "allan", "dan"];
const arrB = [1, 2, 3, 4, 5, 6];
// It is like the minimum viable structure
function applyDiscount(vals, discount) {
    const arr = [];
    for (const val of vals) {
        val.cost *= discount;
        arr.push(val);
    }
    return arr;
}
const shoes = [
    {
        size: 12.5,
        country: "US",
        cost: 120,
    },
    {
        size: 12.5,
        country: "US",
        cost: 110,
    },
];
const tvs = [
    {
        framerate: 120,
        brand: "Samsung",
        cost: 500,
    },
    {
        framerate: 240,
        brand: "Vizio",
        cost: 300,
    },
];
const people = [
    {
        name: "Lane",
    },
    {
        name: "Breanna",
    },
];
const discountedShoes = applyDiscount(shoes, 0.3);
const discountedTVS = applyDiscount(tvs, 0.5);
// Error:
// Argument of type '{ name: string; }[]' is not assignable to parameter of type 'HasCost[]
// ... also you can't buy people what is wrong with you???
const discountedPeople = applyDiscount(tvs, 0.2);
// function pluckEmails<T extends HasEmail>(arr: T[]) {
//   return arr;
// }
function pluckEmails(arr) {
    return arr.map((a) => a.email);
}
function createStore() {
    const data = new Map();
    return {
        get(id) {
            const item = data.get(id);
            if (!item)
                throw new Error("Item not found!");
            return item;
        },
        save(id, item) {
            data.set(id, item);
        },
        list() {
            return [...data.values()];
        },
    };
}
const userStore = createStore();
userStore.save("1", { id: "1", name: "Divyanshu" });
userStore.save("2", { id: "1", name: "Divyanshu_2" });
userStore.save("3", { id: "1", name: "Divyanshu_3" });
function addAndGetItems(store, id, newItem) {
    store.save(id, newItem);
    return store.list();
}
function createQueue() {
    const jobs = [];
    return {
        push(job) {
            jobs.push(job);
        },
        next() {
            return jobs.shift();
        },
        list() {
            return jobs;
        },
    };
}
const queue = createQueue();
queue.push({ title: "Analyst at JP Morgan", applied: true });
queue.push({ title: "Analyst at JP Morgan AGAIN", applied: true });
// console.log(queue.list());
function transform_sm(inputs, update) {
    const outputs = [];
    for (const input of inputs) {
        const output = update(input);
        outputs.push(output);
    }
    return outputs;
}
const humans = [
    { name: "Eren", age: 15 },
    { name: "Mikasa", age: 16 },
    { name: "Armin", age: 15 },
];
const titanTransformer = (human) => `${human.name} is a titan!`;
function summarizeFeedback(data) {
    return [];
}
// console.log(summarizeFeedback<Obj>([{ text: "hello" }]));
// don't touch below this line
function transform_smm(inputs, fn) {
    const result = [];
    for (const item of inputs) {
        result.push(fn(item));
    }
    return result;
}
export function summarizeFeedback2(data) {
    return transform_sm_2(data, (d) => d.text);
}
// don't touch below this line
function transform_sm_2(inputs, fn) {
    const result = [];
    for (const item of inputs) {
        result.push(fn(item));
    }
    return result;
}
//# sourceMappingURL=app.js.map