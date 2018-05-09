import { Client, Command, ChromelessOptions, Cookie, CookieQuery, PdfOptions } from '../types';
export default class LocalRuntime {
    private client;
    private chromelessOptions;
    private userAgentValue;
    constructor(client: Client, chromelessOptions: ChromelessOptions);
    run(command: Command): Promise<any>;
    private goto(url);
    private clearCache();
    private setUserAgent(useragent);
    private waitTimeout(timeout);
    private waitSelector(selector);
    private click(selector);
    private returnCode<T>(fn, ...args);
    private scrollTo<T>(x, y);
    private scrollToElement<T>(selector);
    private mousedown(selector);
    private mousup(selector);
    private setHtml(html);
    private focus(selector);
    type(text: string, selector?: string): Promise<void>;
    cookies(nameOrQuery?: string | CookieQuery): Promise<Cookie[]>;
    allCookies(): Promise<Cookie[]>;
    setCookies(nameOrCookies: string | Cookie | Cookie[], value?: string): Promise<void>;
    deleteCookies(name: string, url: string): Promise<void>;
    clearCookies(): Promise<void>;
    press(keyCode: number, count?: number, modifiers?: any): Promise<void>;
    returnExists(selector: string): Promise<boolean>;
    returnInputValue(selector: string): Promise<string>;
    returnScreenshot(): Promise<string>;
    returnHtml(): Promise<string>;
    returnPdf(options?: PdfOptions): Promise<string>;
    clearInput(selector: string): Promise<void>;
    setFileInput(selector: string, files: string[]): Promise<void>;
    private log(msg);
}