export declare class Metadata {
    static cli_version: string;
    static runtime_version: string;
    static runtimes: string[];
    static initialize(): void;
    static getLatestRuntime(): Promise<string | null>;
}
