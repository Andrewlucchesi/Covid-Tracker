const initState ={
    reports: []
}

const reportReducer = (state = initState, action) => {
  switch (action.type){
    case 'SUBMIT_REPORT':
      console.log('submitted report', action.project)
      return state;
    case 'SUBMIT_REPORT_ERROR':
      console.log('submit report error', action.err);
      return state;
    default:
      return state;
  }
}

export default reportReducer 