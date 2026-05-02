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

function getTicketInfo(id: number | string) {
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

function calculateApiCost(numRequest: number, tier = "String") {
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
  } else if (modelType === "image") {
    baseNumber = 5;
    rateNumber = 0.02;
  } else if (modelType === "code") {
    baseNumber = 3;
    rateNumber = 0.05;
  }

  return Math.round(baseNumber * rateNumber * promptLength);
}

// console.log(estimateResponseTime(200, ":dlj"));

type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction) {
  console.log(direction);
}

// move("north");

type Priority = "low" | "medium" | "high" | "critical";

function setPriority(level: Priority) {
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

// console.log(setPriority("low"));

type Class = "wizard" | "warrior" | "rogue";
type Race = "elf" | "human" | "dwarf";
type Hero = `hero: ${Race} ${Class}`;

type LogLevel = "info" | "warn" | "error";
type LogSourceType = "api" | "database" | "auth";
type LogMessage = `${LogLevel}: ${string} `;
type LogSource = `${LogSourceType}_${number}`;

// Arrays

const ratings: (number | string)[] = [1, 2, 3, 4, 5];

function averageScore(ratings: (number | string)[]) {
  // if (ratings.length === 0) return 0;
  // return ratings.reduce((sum, curr) => (sum += curr)) / ratings.length;
}

// console.log(averageScore(ratings));

function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[],
) {
  for (let i = 0; i < comments.length; i++) {
    if (comments[i] === id) {
      comments[i] = comment;
      break;
    }
  }
  console.log(comments);
}

// interpolateComment(1, "hello", [1, 2, 3, 4]);

function formatLabels(...labels: string[]) {
  if (labels.length === 0) return "No labels";
  if (labels.length === 1) return `Labels: ${labels[0]}`;
  return `Labels: ${labels.join(", ")}`;
}

// console.log(formatLabels("one", "two", "three"));

// Objects

type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
};

function processMail(mail: Mail) {
  return `  FROM: ${mail.from}
  TO: ${mail.to.join(", ")}
  SUBJECT: ${mail.subject}
  BODY: ${mail.body}`;
}

// console.log(
//   processMail({
//     from: "Divyanshu",
//     to: ["John", "Mark", "Paul"],
//     subject: "Result",
//     body: "You filed bro",
//     urgent: true,
//   }),
// );

type MailOptional = {
  from: string;
  to: string[];
  subject: string;
  body?: string; // body is optional
  urgent: boolean;
};

type Address = { ad1: string; ad2: string; zipcode: number };

let newUser: Address = { ad1: "Hyderabad", ad2: "India", zipcode: 500069 };

// console.log(newUser);

// Unions of objects with a discriminant property are call "discriminated unions" or "tagged unions".

type MultipleChoiceLesson = {
  kind: "multiple-choice"; // Discriminant property
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: "coding"; // Discriminant property
  studentCode: string;
  solutionCode: string;
};

type Lesson = MultipleChoiceLesson | CodingLesson;

function isCorrect(lesson: Lesson) {
  if (lesson.kind === "multiple-choice") {
    return lesson.studentAnswer === lesson.correctAnswer;
  } else {
    return lesson.studentCode === lesson.solutionCode;
  }
}

// Sets

const strArr = ["one", "two", "three"];

function findNumUniqueLabels(formattedArr: string[]) {
  const set = new Set<String>(strArr);
  return set.size;
}

// console.log(findNumUniqueLabels(strArr));

// const map = new Map<string, number>();

// Dynamic key
type MailPreference = {
  [key: PropertyKey]: number;
};

type MailPreference2 = Record<string, boolean>;

type MailName = {
  readonly name: string;
};

// readonly things
// that as const makes the arr readonly
const arr = ["apple", "banana", "grapes"] as const;
const a = { name: "John", age: 23 } as const;
// a.age = 69;

type A = { name: string; age: number };

const user = {
  name: "John",
  age: 26,
} as const satisfies A;

// tuples
// A specific kind of array that has fixed structure, specific known type

const tuple: [string, number, boolean] = ["String", 69, true];
tuple.push("This can also be done ");
// console.log(tuple);
// console.log(tuple);

function createTicket(
  prevTicket: number,
  comment: string,
): [number, string, boolean] {
  return [++prevTicket, comment, comment.toLowerCase().includes("critical")];
}

const [ticket, comment, yes] = createTicket(12, "i contain critical");
// console.log(ticket, comment, yes);

const objTuple: { prop1: number; prop2: string } = { prop1: 1, prop2: "two" };
const location: { lat: number; lan: number } = { lat: 72.0, lan: 73.0 };
// console.log(location);
// Instead of [string, number, boolean] where you do not know what the string num and bol is you can add label that does not make any change in code logic, It is like a comment

type TupleWithLabel = [ticket: number, comment: string, yes?: boolean];
const tuple3: TupleWithLabel = [234, "Nope"];
type NameAndScore = [string, ...number[]];

const testDetails: NameAndScore = ["John", 1, 2, 34];
// console.log(testDetails);

function tokenSize(input: string): [number, ...string[]] {
  const values = input.split(" ");
  // console.log(values);

  return [values.length / 100, ...values];
}

// console.log(tokenSize("Hello my name iss"));

// intersections

type IndividualContributor = {
  id: number;
  name: string;
  tasks: string[];
};

type Manager = {
  directReport: number[];
};

type GoodManager = IndividualContributor & Manager;

const hunter: GoodManager = {
  id: 1234,
  name: "Steve",
  tasks: ["Nothing", "Nothing again"],
  directReport: [234, 343],
};

type SupportBot = {
  id: string;
  name: string;
  status: string;
  language: string;
};

type TextBot = SupportBot & {
  messageLog: string[];
  sendMessage: (message: string) => string;
};

type VoiceBot = SupportBot & {
  callLog: string[];
  phoneNumber: string;
  dialNumber: (phoneNumber: string) => string;
};

// never
// the var cannot have an value ever

function checkStatus(code: 1 | 2 | 3) {
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

// console.log(checkStatus(3));

type SupportAgent = {
  id: number;
  role: "agent";
  assignedTickets: number;
};

type EndUser = {
  id: number;
  role: "customer";
  submittedTicket: number;
};

type SupportAgentUser = SupportAgent | EndUser;
// now when you give a obj lets say SupportAgentUser you can use anyone SupportAgent or EndUser so all property of any one no overlapping property

const obj: SupportAgentUser = {
  id: 23,
  role: "agent",
  assignedTickets: 21,
};

function getTicketCount(user: SupportAgentUser): number {
  if (user.role === "agent") {
    return user.assignedTickets;
  }
  return user.submittedTicket;
}

// interface
// this cannot work on type in interface they merge the properties in type it throws an error
interface SpaceShip {
  aircraftName: string;
  serialNumber: number;
  pilotAssigned: string;
}

interface SpaceShip {
  lastRepairedDayCount: number;
}

const ship1269: SpaceShip = {
  aircraftName: "Beatles23",
  serialNumber: 234,
  pilotAssigned: "Kevin",
  lastRepairedDayCount: 23,
};

interface Character {
  name: string;
  level: number;
}

interface Wizard extends Character {
  spellBook: string[];
  mana: number;
}

interface Message {
  id: string;
  sender: string;
  recipient: string;
  timestamp: number;
}

interface TextMessage extends Message {
  text: string;
  carrier: string;
}

interface EmailMessage extends Message {
  subject: string;
  body: string;
}

interface CanHaveMultipleInterface extends Message, TextMessage {
  nope: string;
}

interface SystemEvent {
  type: string;
  timeStamp: number;
  payload: string | object;
  affectedServices: string;
  severity: "low" | "medium" | "high" | "critical";
}

interface ErrorEvent extends SystemEvent {
  type: "error";
  payload: string;
  code: number;
}

interface OutageEvent extends SystemEvent {
  type: "outage";
  severity: "critical";
  durationSeconds: number;
}
