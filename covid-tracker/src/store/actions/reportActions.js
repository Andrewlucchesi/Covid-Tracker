//This file stores actions that can be called by report.js and dispatched to ReportReducer
//Such as submitting a report
export const submitReport = (report) => {
    return (dispatch, getState,{ getFirebase, getFirestore }) => {
        //make async call to firestore
        const firestore = getFirestore();
        firestore.collection('reports').add({
            ...report, 
            reportedAt: new Date()
        }).then(()=>{
            dispatch({  type: 'SUBMIT_REPORT', report});
        }).catch((err) =>{
            dispatch({ type: 'SUBMIT_REPORT_ERROR', err});
        })
            }
};