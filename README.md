# Windows-Event-Log-Type
A Typescript declaration for windows-eventlog node library 

# Installation
> `npm install --save @types/windows-eventlog`

# Summary
This package contains type definitions for windows-eventlog ( https://www.npmjs.com/package/windows-eventlog ).

# Example
> import {EventLog} from 'windows-eventlog';
> export class EventLogTest {
>   public constructor() {
>       const eventLog = new EventLog('myService');
>       eventLog.log('info', 'hello', () => { console.log('done'); });
>       eventLog.log('info', 'hello', () => { console.log('done'); });  
>       eventLog.log('info', 'hello', () => { console.log('done'); });  
>   }    
> }

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/windows-eventlog

Additional Details
 * Last updated: Fri, 10 May 2019 21:02:00 GMT
 * Dependencies: none
 * Global values: none

# Credits
This definition was written by John Barrett <https://github.com/jbarrett732/> 

