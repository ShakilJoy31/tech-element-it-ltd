import { apiSlice } from "../apiSlice";

export const projectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllProject: builder.query({
            query: () => `/project/get-project-all`,
            providesTags: ["project"],
        }),

    }),
});

export const {
    useGetAllProjectQuery
} = projectApi;
