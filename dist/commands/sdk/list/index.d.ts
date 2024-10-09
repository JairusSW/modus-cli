import { Command } from "@oclif/core";
export default class SDKListCommand extends Command {
    static args: {};
    static description: string;
    static examples: string[];
    static flags: {};
    run(): Promise<void>;
    private logError;
}
