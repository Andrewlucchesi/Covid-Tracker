export const submitReport = (report) => {
    return (dispatch, getState,{ getFirebase, getFirestore }) => {
        //make async call
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