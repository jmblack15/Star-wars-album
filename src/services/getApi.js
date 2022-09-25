const fetchData = async(urlApi) => {
  const res = await fetch(urlApi);
  const data = await res.json();
  return data;
}

export {fetchData };
