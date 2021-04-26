import { v4 as uuidv4 } from "uuid";

export default async function createPayDemand(
  userID,
  amount = "",
  reference = ""
) {
  // Throw error if fields are blank
  if (amount === "" && reference === "") {
    return {
      error: "You must set an amount and a reference",
    };
  }
  if (amount === "") {
    return {
      error: "You must set an amount",
    };
  }
  if (reference === "") {
    return {
      error: "You must set a reference",
    };
  }

  const payload = await fetch(
    `https://api.sandbox.crezco.com/v1/users/${userID}/pay-demands`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Crezco-Key": process.env.NEXT_PUBLIC_CREZCO_API_KEY,
      },
      body: JSON.stringify({
        request: {
          useDefaultBeneficiaryAccount: true,
          currency: "GBP",
          reference,
          amount,
        },
        idempotencyId: uuidv4(),
      }),
    }
  );

  // Throw error if cannot create pay demand
  if (payload.status !== 201) {
    return {
      error: "Failed to create payment link",
    };
  }

  // Decode pay demand ID
  const payment = await payload.json();

  return payment;
}
