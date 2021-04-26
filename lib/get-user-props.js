const errorProps = {
  error: "User could not be found",
  user: {
    firstName: "Stranger",
    lastName: "McStrangerFace",
    displayName: "Stranger",
    eMail: "name@email.com",
  },
};

export default async function getUserProps(query) {
  // Throw error if no user-id is supplied
  if (query["user-id"] === undefined) {
    return {
      props: errorProps,
    };
  }

  const payload = await fetch(
    `https://api.sandbox.crezco.com/v1/users/${query["user-id"]}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Crezco-Key": process.env.CREZCO_API_KEY,
      },
    }
  );

  // Throw error if cannot fetch user from Crezco
  if (payload.status !== 200) {
    return {
      props: errorProps,
    };
  }

  // Decode user object payload
  const user = await payload.json();
  user.id = query["user-id"];

  return {
    props: {
      user,
    },
  };
}
