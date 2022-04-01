import axios from "axios";

const useAxios = (list) => {
  const careerAPI = '/api/career';

  const getData = async (callback) => {
    try{
      let allData = await axios.get(careerAPI);
      let employeeData = allData.data.data;
      callback(employeeData)
    } catch (err) {
      console.log(err)
    }
  }

  const addNewData= async (item, callback) => {
    const bodyFormData = new FormData();
    for (let i in item) {
      // console.log('i', i)
      // console.log('item[i]', item[i])
      bodyFormData.append(i, item[i]);
    }
    // console.log('Body Form Data', bodyFormData)

    try {
      const newData = await axios.post(careerAPI, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      callback(newData.data);
    } catch (err) {
      console.log(err)
    }
  }

  return [getData, addNewData];
}

export default useAxios;