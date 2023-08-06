interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

const createUser = async ({ username, password, email }: UserCredentials) => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.status !== 201) {
    console.log("something went wrong");
    throw new Error("something went wrong");
  }
  return response;
};

export default createUser;
