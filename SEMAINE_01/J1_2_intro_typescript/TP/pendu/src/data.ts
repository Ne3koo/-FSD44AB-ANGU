import { Word } from "./word";

export const MockWords: Word[] = [
    new Word("cornedrue"),
    new Word("cognards"),
    new Word("fourchelang"),
    new Word("gringotts"),
    new Word("hyppogriffes")
];

export enum Status {
    Winner,
    Loser,
    Progress,
}