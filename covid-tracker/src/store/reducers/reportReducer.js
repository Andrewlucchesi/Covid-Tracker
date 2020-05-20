const initState ={
    reports: [
        {city: 'LA', zip: '90024'},
        {city: 'San Diego', zip: '92108'},
        {city: 'Fresno', zip: '93706'}
    ]
}

const reportReducer = (state = initState, action) => {
    switch (action.type){
        case 'SUBMIT_REPORT':
            console.log('submitted report', action.project)
    }
    return state
}

export default reportReducer 