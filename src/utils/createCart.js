export const createCart = async (porductId) => {
  const res = await fetch(`https://cart-api.teamrabbil.com/api/create-cart/${porductId}`, {
    method: "GET",
    headers: {
      token: localStorage.getItem("token"),
    },
  });

  const data = await res.json();
  return data;
};
