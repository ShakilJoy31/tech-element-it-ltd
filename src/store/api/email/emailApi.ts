import { apiSlice } from "@/store/rootApi/apiSlice";


export const emailApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEmailClient: builder.mutation({
      query: (data) => ({
        url: "/email/create-email",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["EmailClient"],
    }),
  }),
});

export const {
    useCreateEmailClientMutation,
} = emailApi;
