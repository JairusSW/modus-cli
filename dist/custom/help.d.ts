import { Command, Help, Interfaces } from "@oclif/core";
export default class CustomHelp extends Help {
    private target_pad;
    private pre_pad;
    private post_pad;
    formatRoot(): string;
    formatCommand(command: Command.Loadable): string;
    formatCommands(commands: Command.Loadable[]): string;
    formatTopic(topic: Interfaces.Topic): string;
    formatTopics(topics: Interfaces.Topic[]): string;
    formatRootFooter(): string;
    showRootHelp(): Promise<void>;
    showTopicHelp(topic: Interfaces.Topic): Promise<void>;
    showCommandHelp(command: Command.Loadable): Promise<void>;
}
