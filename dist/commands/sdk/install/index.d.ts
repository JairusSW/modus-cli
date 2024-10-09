import { Command } from "@oclif/core";
import { ParserOutput } from "@oclif/core/interfaces";
export default class SDKInstallCommand extends Command {
    static args: {
        version: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static description: string;
    static examples: string[];
    static flags: {
        silent: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        repo: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        branch: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        commit: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        link: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    run(): Promise<void>;
    installVersion(ctx: ParserCtx): Promise<void>;
    installCommit(ctx: ParserCtx): Promise<void>;
    linkDir(ctx: ParserCtx): Promise<void>;
    private logError;
    private confirmAction;
}
type ParserCtx = ParserOutput<{
    silent: boolean;
    branch: string | undefined;
    link: string | undefined;
}, {
    [flag: string]: any;
}, {
    version: string | undefined;
}>;
export {};
