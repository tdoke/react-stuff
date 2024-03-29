export const getAddAndShowCompaniesQueries = (builder) => ({
    getCompanies: builder.query({
        query: () => "/companies",
        providesTags: ['Company'],
    }),
    addNewCompany: builder.mutation({
        query: (company) => ({
            url: '/companies',
            method: 'POST',
            body: company
        }),
        invalidatesTags: ['Company'],
    }),
    deleteCompany: builder.mutation({
        query: (id) => ({
            url: `/companies/${id}`,
            method: 'DELETE'
        }),
        invalidatesTags: ['Company'],
    }),
    updateCompany: builder.mutation({
        query: (company) => ({
            url: `/companies/${company.id}`,
            method: 'PUT',
            body: company
        }),
        invalidatesTags: ['Company'],
    }),
});

