import { apiSlice } from "../apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllProject: builder.query({
      query: ({ page = 1, size = 10, search = "" }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("size", size.toString());
        if (search) params.append("search", search);

        return {
          url: `/project/get-project-all?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["project"],
    }),

  }),
});

export const {
  useGetAllProjectQuery
} = projectApi;
