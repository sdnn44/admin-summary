import { BanType } from "./BanType";

export type AdminType = {
    id: number;
    nick: string;
    content: BanType[];
}