import { Action } from '@ngrx/store';

export const TOOLTIP_TOGGLE = '[Tooltip] Toggle';

export class TooltipToggle implements Action {
    readonly type = TOOLTIP_TOGGLE;

    constructor(public payload: number) {};
}


export type Actions = TooltipToggle;