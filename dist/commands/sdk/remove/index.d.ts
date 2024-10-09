import { Command } from "@oclif/core";
export default class SDKRemoveCommand extends Command {
    static args: {
        version: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static description: string;
    static examples: string[];
    static flags: {};
    run(): Promise<void>;
    private logError;
}
