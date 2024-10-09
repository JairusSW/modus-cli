import { Command } from "@oclif/core";
export default class BuildCommand extends Command {
    static args: {
        path: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static description: string;
    static examples: string[];
    static flags: {};
    run(): Promise<void>;
    private logError;
}
