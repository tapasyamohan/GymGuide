export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key':  'ff3c6c42d9msh56a52894f4b94b7p11d2f0jsn3aedc39d9442',
    }
     
  };
   

export const youtubeOptions = {
  method: 'GET',
   
  headers: {
    'X-RapidAPI-Key': 'ff3c6c42d9msh56a52894f4b94b7p11d2f0jsn3aedc39d9442',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  }
};

 
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };