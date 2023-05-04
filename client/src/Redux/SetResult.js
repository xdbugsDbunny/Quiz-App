import { postResultOnServer } from '../hepler/helper'
import * as actionType from './resultReducer'

export const PushAnswer = (answer) => async(dispatch) =>{
    try {
        await dispatch(actionType.pushResultAction(answer))
    } catch (error) {
        console.log(error)
    }
}

export const UpdateResult = (index ) => async(dispatch) => {
    try {
        dispatch(actionType.updateResultAction(index))
    } catch (error) {
        
    }
}

export const usePostResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if(result !== [] && !username) throw new Error("Couldn't get Result");
            await postResultOnServer(`http://localhost:5000/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}