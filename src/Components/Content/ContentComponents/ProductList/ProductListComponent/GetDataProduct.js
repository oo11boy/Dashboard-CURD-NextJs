// get server side data product
export async function getdataproduct() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return data;
}

