//This file stores actions that can be called by report.js and dispatched to ReportReducer
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
    batch.set(reportRef, {
        ...report,
        reportedAt: firestore.FieldValue.serverTimestamp()
    });

    if(report.fever && report.fever === true){
      batch.set(statsRef, { 
        feverCount: increment, 
        merge: true 
      });
    }

    if(report.cough && report.cough === true){
      batch.set(statsRef, { 
        coughCount: increment, 
        merge: true 
      });
    }

    if(report.soreThroat && report.soreThroat === true){
      batch.set(statsRef, { 
        soreThroatCount: increment, 
        merge: true 
      });
    }

    if(report.breath && report.breath === true){
      batch.set(statsRef, { 
        breathCount: increment, 
        merge: true 
      });
    }

    if(report.fatigue && report.fatigue === true){
      batch.set(statsRef, { 
        fatigueCount: increment, 
        merge: true 
      });
    }

    if(report.taste && report.taste === true){
      batch.set(statsRef, { 
        tasteCount: increment, 
        merge: true 
      });
    }

    if(report.muscle && report.muscle === true){
      batch.set(statsRef, { 
        muscleCount: increment, 
        merge: true 
      });
    }

    //Count total number of reports
    batch.set(statsRef, { 
      reportCount: increment, 
      merge: true
    }); 

    batch.commit().then(() => {
      dispatch({ 
        type: 'SUBMIT_REPORT', 
        report
      });
    }).catch((err) => {
      dispatch({ 
        type: 'SUBMIT_REPORT_ERROR', 
        err
      });
    })
  }
};
