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

// ENUM

// Not must useful
enum StatusCode {
  OK,
  Created,
  BadRequest,
  Unauthorized,
  NotFound,
}

enum RequestSeverity {
  Low,
  Medium,
  High,
  critical,
}

function isCritical(request: RequestSeverity): boolean {
  return request === RequestSeverity.critical;
}

// console.log(isCritical(RequestSeverity.critical));

// Type Narrowing
type RegularCustomer = {
  plan: "regular";
  tickets: number;
  aboveLimit: boolean;
};

type PremiumCustomer = {
  plan: "premium";
  tickets: number;
};

type Customer = RegularCustomer | PremiumCustomer;

function openTicket(customer: Customer): number {
  if (customer.plan === "regular" && customer.aboveLimit) return -1;

  return (customer.tickets = 1);
}

// Unknown type
let varA: unknown;
let varB: any;

if (typeof varA === "string") {
  varA.toLowerCase();
}

type PositiveSentiment = "happy" | "satisfied";
type NegativeSentiment = "dissatisfied" | "angry";

type Sentiment = PositiveSentiment | NegativeSentiment;
type Response = { message: string; notify: Boolean };

function responseToSentiment(sentiment: Sentiment): Response {
  if (sentiment === "happy" || sentiment === "satisfied") {
    return handlePositiveSentiment(sentiment);
  } else if (sentiment === "dissatisfied" || sentiment === "angry") {
    return handleNegativeSentiment(sentiment);
  }

  return { message: "We don't understand.", notify: true };
}

function handlePositiveSentiment(sentiment: PositiveSentiment): Response {
  return sentiment === "happy"
    ? { message: "Hooray!", notify: false }
    : { message: "We are glad.", notify: false };
}

function handleNegativeSentiment(sentiment: NegativeSentiment): Response {
  return sentiment === "dissatisfied"
    ? { message: "We are sorry.", notify: false }
    : { message: "We apologize. A manager will contact you.", notify: true };
}

type ModelSkippity = {
  version: "3.5" | "4" | "4s";
  search: boolean;
};

type ModelJean = {
  version: "2" | "3" | "3.14";
  think: boolean;
};

type Model = ModelSkippity | ModelJean;

function isModelSkippity(model: Model): model is ModelSkippity {
  return (
    "search" in model &&
    (model.version === "3.5" || model.version === "4" || model.version === "4s")
  );
}

type Topic = "question" | "complaint" | "upgrade" | "refund";

type Chat = {
  topic: Topic;
  userId: string;
};

type CountReport = {
  questions: number;
  complaints: number;
  upgrades: number;
  refunds: number;
};

function countComplaints(chats: Chat[]): CountReport {
  let counts = { questions: 0, complaints: 0, upgrades: 0, refunds: 0 };
  for (const chat of chats) {
    counts = incrementCount(chat, counts);
  }
  return counts;
}

function incrementCount(chat: Chat, counts: CountReport): CountReport {
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
      throw new Error(`Unhandled topic: ${chat.topic satisfies never}`);
  }
}

//

type UserFeedback = {
  email?: string;
  rating?: number;
};

function handleFeedback(feedback: UserFeedback) {
  if (!feedback.rating || !isValidRating(feedback.rating))
    return "Give a rating between 1 and 5.";

  if (!feedback.email || !feedback.email.includes("@"))
    return "Provide a valid email address.";

  return `Thanks, ${getEmailUsername(feedback.email)}! Rating: ${ratingToString(feedback.rating)}`;
}

function getEmailUsername(email: string): string {
  const atIndex = email.indexOf("@");
  return atIndex !== -1 ? email.slice(0, atIndex) : email;
}

function isValidRating(rating: number): rating is 1 | 2 | 3 | 4 | 5 {
  return (
    rating === 1 || rating === 2 || rating === 3 || rating === 4 || rating === 5
  );
}

function ratingToString(rating: 1 | 2 | 3 | 4 | 5): string {
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

let v: string;

// utility types

// Partial, this makes all the property optional

type User = {
  id?: string;
  email: string;
};

function updateUser(user: Partial<User>) {
  if (user.id) {
    return "can't update id";
  }
  if (user.email) {
    return `updating email to ${user.email}`;
  }
  return "nothing to update";
}

// console.log(updateUser({ email: "lol@gmail.com" }));

export interface ContactInfo {
  email?: string;
  phoneNumber?: string;
}

export function addBillingInfo(info: Required<ContactInfo>) {
  return `Email: ${info.email}, Phone: ${info.phoneNumber}`;
}

// console.log(
//   addBillingInfo({ email: "lol@gmail.com", phoneNumber: "91829283" }),
// );

// Using string as the key type
type StringKeyDictionary = Record<string, number>;

const karateScores: StringKeyDictionary = {
  "Ralph ": 60,
  "William ": 100,
  "Jackie Chan": 82,
};

// We can add any string key
karateScores["Pat Morita"] = 85;

// But values must be numbers
// Error: Type 'string' is not assignable to type 'number'
// karateScores["Eve"] = "A+";

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British" },
};

// console.log(cats);

export type ModelStatus = "waiting" | "thinking" | "responding";

const waitingMessage = "Awaiting prompt";
const thinkingMessage = "Cooking";
const respondingMessage = "Sending response";

export function getStatusMessage(status: ModelStatus) {
  const map: Record<ModelStatus, string> = {
    waiting: waitingMessage,
    thinking: thinkingMessage,
    responding: respondingMessage,
  };

  return map[status];
}

// pick

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
  images: string[];
  reviews: { user: string; rating: number; text: string }[];
}

type ProductSummery = Pick<Product, "id" | "name" | "price">;

export interface User2 {
  id: string;
  name: string;
  email: string;
  age: number;
}

// export type UserWithoutID = Pick<User2, "name" | "email" | "age">;

// export function stripID(user: User2): UserWithoutID {
//   const { name, email, age } = user;
//   return { name, email, age };
// }

export interface User3 {
  id: string;
  name: string;
  email: string;
  age: number;
}

export type UserWithoutID = Omit<User3, "id">;

export function stripID(user: User3): UserWithoutID {
  const { name, email, age } = user;
  return { name, email, age };
}
