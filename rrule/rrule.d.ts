// Type definitions for RRule 2.1.0
// Project: https://github.com/jkbrzt/rrule
// Definitions by: Antoine Chabert <https://github.com/antitoine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace RRule {

    type Rule = {
        cache?: boolean,
        dtstart?: Date,
        interval?: number,
        wkst?: number | string,
        count?: number,
        until?: Date
// TODO
    }

    export interface RRule {
        RRule(rule: Rule);
    }

}
