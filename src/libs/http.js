const BASE_URL =  'http://badges-api-example-luissigala.herokuapp.com';

class Http {
    static instance = new Http();

    get_all = async () =>{
        try{
            let request = await fetch(`${BASE_URL}/all`);
            let response = await request.json();
            return response;
        }catch(err){
            console.log('http get all method err', err);
            throw Error(err);
        }
    };
    get = async badgeId =>{
        try{
           let request = await fetch(`${BASE_URL}/_id:${badgeId}/`);
           let response = await request.json();
           return response;
        }catch(err) {
            console.log('http get method err', err);
            throw Error(err);
        }
    };
    post = async badge => {
        try {
          let request = await fetch(`${BASE_URL}/new/`, {
                method: 'POST',
                body: JSON.stringify(badge),
            });
            let response = await request.json();
            return response;
        }catch(err){
            console.log('http post method err', err);
            throw Error(err);
        }
    };
    put = async (badgeId, body) =>{
        try {
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                  body: JSON.stringify(body),
              });
              let response = await request.json();
              return response;
          }catch(err){
              console.log('http put method err', err);
              throw Error(err);
          }
    };
    remove = async badgeId =>{
        try {
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`, {
                  method: 'DELETE',
              });
              let response = await request.json();
              return response;
          }catch(err){
              console.log('http delete method err', err);
              throw Error(err);
          }
    };

}

export default Http;