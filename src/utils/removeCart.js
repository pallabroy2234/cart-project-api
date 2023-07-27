export const removeCart = async (porductId) => {
  const res = await fetch(`https://cart-api.teamrabbil.com/api/remove-cart/${porductId}`, {
    method: "GET",
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  const data = await res.json();
  return data;
};
