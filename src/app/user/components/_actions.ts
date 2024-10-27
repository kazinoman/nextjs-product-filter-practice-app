"use server";

export const loginActions = async (data: any) => {
  if (data) {
    let result;
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const error = await res.json();
        console.log(error);

        return { message: error.message, error: true };
      }

      result = await res.json();
      console.log(result);
    } catch (e: Error | any) {
      console.log(e);
      return { message: e?.message, error: true };
    }

    return { message: "Login Successful", error: false, result };
  }
};
