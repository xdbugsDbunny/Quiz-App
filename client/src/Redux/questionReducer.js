import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        }
        ,
        nextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        prevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        tryAgainAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

export const { startExamAction, nextAction, prevAction, tryAgainAction} = questionReducer.actions;

export default questionReducer.reducer;