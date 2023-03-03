const AuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  // jwt
  fetch("https://genius-car-server-orpin-three.vercel.app/jwt", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // local storage is the easiest but not the best place to store jwt token
      localStorage.setItem("genius-token", data.token);
      //   navigate(from, { replace: true });
    });
};

export default AuthToken;
