export const getData = async(endpoint, setData, setLoading) =>{
      
    const api = await fetch(endpoint);
    const results = (await api.json()).results;
    setData(results);
    setLoading(false);

}