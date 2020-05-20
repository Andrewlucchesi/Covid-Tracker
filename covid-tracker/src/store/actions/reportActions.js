export const submitReport = (report) => {
    return (dispatch, getState) => {
        //make async call
        dispatch({  type: 'SUBMIT_REPORT', report});
    }
};