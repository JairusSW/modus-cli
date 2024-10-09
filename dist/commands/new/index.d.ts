import { Command } from "@oclif/core";
export default class NewCommand extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        name: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        dir: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        sdk: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        force: import("@oclif/core/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
    private promptProjectName;
    private promptInstallPath;
    private promptSdkSelection;
    private installProject;
    private installRuntime;
    private logError;
    private confirmAction;
}
