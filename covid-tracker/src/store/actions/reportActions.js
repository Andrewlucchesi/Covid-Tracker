export const submitReport = (report) => {
    return (dispatch, getState,{ getFirebase, getFirestore }) => {
        //make async call
        dispatch({  type: 'SUBMIT_REPORT', report});
    }
};