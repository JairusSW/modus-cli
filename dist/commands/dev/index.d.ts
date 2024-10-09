import { Command } from "@oclif/core";
export default class Run extends Command {
    static args: {
        path: import("@oclif/core/interfaces").Arg<string, Record<string, unknown>>;
    };
    static flags: {
        watch: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        build: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        silent: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        verbose: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        freq: import("@oclif/core/interfaces").OptionFlag<number, import("@oclif/core/interfaces").CustomOptions>;
        runtime: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        legacy: import("@oclif/core/interfaces").BooleanFlag<boolean>;
    };
    static description: string;
    static examples: string[];
    run(): Promise<void>;
    private logError;
}
