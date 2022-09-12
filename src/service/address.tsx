export const getAddressByCep = async (zip: string) => {
  const response = await fetch(`http://viacep.com.br/ws/${zip}/json/`);
  const data = await response.json();
  console.log(data);
  return data;
};
