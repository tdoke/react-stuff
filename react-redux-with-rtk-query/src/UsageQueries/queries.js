export const countriesQueries = (builder) => ({
    getCompanies: builder.query({
        query: () => "/countries"
    }),
});

