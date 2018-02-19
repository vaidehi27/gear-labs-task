import { TimeSlotAPI } from '../../service/Data'

const getRecord = (id) => {
  return {
    type : 'GET_RECORD',
    payload : new Promise(async(resolve, reject) => {
      try {
        let response = await TimeSlotAPI.get(id)
        if(response)
            resolve({
              data : response
            })
        else
            reject({
              data : "error occurred"
            })
      }
      catch(error) { 
          return reject({ data : error })
      }
    })
  }
}

export const _getRecord = (id) => {
  return (dispatch, getState) => { 
      dispatch(getRecord(id)).catch(error => {})
  }
}

export const _postRecord = (data) => {
  return TimeSlotAPI.post(data)
}