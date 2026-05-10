export interface ContactInfo {
    email?: string;
    phoneNumber?: string;
}
export declare function addBillingInfo(info: Required<ContactInfo>): string;
export type ModelStatus = "waiting" | "thinking" | "responding";
export declare function getStatusMessage(status: ModelStatus): string;
export interface User2 {
    id: string;
    name: string;
    email: string;
    age: number;
}
export interface User3 {
    id: string;
    name: string;
    email: string;
    age: number;
}
export type UserWithoutID = Omit<User3, "id">;
export declare function stripID(user: User3): UserWithoutID;
export declare function summarizeFeedback2<T extends {
    text: string;
}>(data: T[]): string[];
//# sourceMappingURL=app.d.ts.map