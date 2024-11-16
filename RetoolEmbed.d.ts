export declare class RetoolEmbed extends HTMLElement {
    private iframe;
    private elementWatchers;
    onData?: (data: any) => void;
    customStyle?: string;
    private _data;
    constructor();
    get data(): any;
    set data(value: any);
    onMessage(event: MessageEvent): void;
    private onDataHandler;
    private createOrReplaceWatcher;
    private postMessageForSelector;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
