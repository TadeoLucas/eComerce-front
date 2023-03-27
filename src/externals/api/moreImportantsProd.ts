

// import axios from 'axios';

const getMoreImportantProductsFromApi = async () => {
    try{
        // const apiResponse = await axios.get(
        //     'http://localhost:PORT/products/best*10.......'
        // )
        // return apiResponse.data.data
        return [
          { id: 'ssss', url: 'http/jd', title: 'reloj', comments: 'anti agua'},
          { id: 'mmmm', url: 'http/jwerd', title: 'mouse', comments: 'laser'},
          { id: 'llll', url: 'http/jdsdfsd', title: 'chip', comments: 'personal'},
          {id: 'xxxx', url: 'http/dfs', title: 'auricular', comments: 'para celular'}
        ]
    }catch(error){
        console.log('el error', (error as Error).message)
        return null
    }
    
}

export {
  getMoreImportantProductsFromApi
}