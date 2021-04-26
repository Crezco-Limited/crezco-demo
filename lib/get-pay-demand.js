const errorProps = {
  error: "Link could not be found",
};

export default async function getPayDemandAsProps(payDemandId) {
  const payload = await fetch(
    `https://api.sandbox.crezco.com/v1/pay-demands/${payDemandId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Crezco-Key": process.env.CREZCO_API_KEY,
      },
    }
  );

  // Throw error if cannot fetch pay demand from Crezco
  if (payload.status !== 200) {
    return {
      props: errorProps,
    };
  }

  const demand = await payload.json();

  return {
    props: {
      demand,
    },
  };
}
