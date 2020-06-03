//This file stores actions that can be called by report.js and dispatched to ReportReducer

// import { batch } from "react-redux";

//Such as submitting a report
export const submitReport = (report) => {
  return (dispatch, getState,{ getFirebase, getFirestore }) => {
    //make async call to firestore
    //Setup atomic write
    const firestore = getFirestore();
    const increment = firestore.FieldValue.increment(1);
   
    const statsRef = firestore.collection('reports').doc('--stats--');
    const reportRef = firestore.collection('reports').doc(`${Math.random()}`);

    const batch = firestore.batch();
    batch.set(reportRef, {...report,reportedAt: firestore.FieldValue.serverTimestamp()});
   if(report.fever && report.fever === 'on'){batch.set(statsRef, { feverCount: increment }, {merge: true} );}
   if(report.cough && report.cough === 'on'){batch.set(statsRef, { coughCount: increment }, {merge: true} );}
   if(report.soreThroat && report.soreThroat === 'on'){batch.set(statsRef, { soreThroatCount: increment }, {merge: true} );}
   if(report.breath && report.breath === 'on'){batch.set(statsRef, { breathCount: increment }, {merge: true} );}
   if(report.fatigue && report.fatigue === 'on'){batch.set(statsRef, { fatigueCount: increment }, {merge: true} );}
   if(report.taste && report.taste === 'on'){batch.set(statsRef, { tasteCount: increment }, {merge: true} );}
   if(report.muscle && report.muscle === 'on'){batch.set(statsRef, { muscleCount: increment }, {merge: true} );}
   batch.set(statsRef, { reportCount: increment }, {merge: true} ); //Count total number of reports
    batch.commit().then(()=>{
      dispatch({  type: 'SUBMIT_REPORT', report});
    }).catch((err) =>{
      dispatch({ type: 'SUBMIT_REPORT_ERROR', err});
    })
  }
};
