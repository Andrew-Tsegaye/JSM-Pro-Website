import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResroucesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResroucesParams) => {
  const { query, category, page } = params;

  try {
    const resrouces = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}`
    );
  } catch (error) {}
};
