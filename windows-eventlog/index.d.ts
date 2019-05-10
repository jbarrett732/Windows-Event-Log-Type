// Type definitions for windows-eventlog
// Project: https://www.npmjs.com/package/windows-eventlog
// Definitions by: John Barrett <https://github.com/jbarrett732>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class EventLog {
	constructor(name: string);

	public log(level: string, message: string, error: () => void): void;
	public logSync(message: string): void;
	public logSync(level: string, message: string): void;

}
