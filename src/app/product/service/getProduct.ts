import axios from "axios";

export async function getProduct(_limit?: number, _page?: number, search?: string) {
  try {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products`, {
      params: {
        limit: _limit ?? 12, // Defaults to 12 if _limit is undefined
        offset: _page ?? 1, // Defaults to 1 if _page is undefined
        search: search || "", // Defaults to an empty string if search is undefined
      },
    });
    let post: any = res;

    if (!post) {
      return new Error("Sorry, Product not found....");
    }
    return post;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    throw error;
  }
}
