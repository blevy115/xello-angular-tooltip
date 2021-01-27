import { Action, ActionsSubject } from '@ngrx/store';
import { Tooltip } from '../models/tooltip.model';
import * as TooltipActions from '../actions/tooltip.actions';


export const initialState : Tooltip[] = [ // Sets Tooltip info when building new buttons id needs to be unique
    {id: 0, buttonText:'Button A', tooltipText:'Tooltip for Button A', open: false}, 
    {id: 1, buttonText:'Button B', tooltipText:'Tooltip for Button B', open: false},
  ];

export function tooltipReducer(state: Tooltip[] = initialState, action: TooltipActions.Actions) {
    switch (action.type) {
        case TooltipActions.TOOLTIP_TOGGLE:
            let newState = [...state]
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id == action.payload) {
                    newState[i] = {...newState[i], open : !newState[i].open};
                } else {
                    newState[i] = {...newState[i], open : false};
                }
            }
            return newState;
        default:
            return state;

    }
}