import { RetoolEmbed } from "./RetoolEmbed";
export type RetoolEmbedAttributes = {
    src: string;
    style?: string;
    onData?: (data: any) => void;
    data?: any;
};
export declare function createRetoolEmbed(attributes: RetoolEmbedAttributes): RetoolEmbed;
