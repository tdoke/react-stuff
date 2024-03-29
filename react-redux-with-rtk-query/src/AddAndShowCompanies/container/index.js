import { useState } from "react";
import { patchQueries } from "../../rtkQueryApi";
import ShowCompanies from "../components/ShowCompanies";
import AddCompany from "../components/AddCompany";
import { getAddAndShowCompaniesQueries } from '../queries';

const {
    useGetCompaniesQuery,
    useAddNewCompanyMutation,
    useDeleteCompanyMutation,
    useUpdateCompanyMutation
} = patchQueries(getAddAndShowCompaniesQueries);

export const AddShowCompaniesContainer = () => {
    const [compToUpdate, setCompToUpdate] = useState(undefined);
    const { data: companies = [] } = useGetCompaniesQuery();
    const [addNewCompany] = useAddNewCompanyMutation();
    const [deleteCompany] = useDeleteCompanyMutation();
    const [updateCompany] = useUpdateCompanyMutation();

    const addNewCompanyMutation = async (company) => {
        try {
            await addNewCompany(company)
                .unwrap();
        } catch (error) {
            console.log("error adding a new company", error);
        }
    };

    const deleteCompanyMutation = async (id) => {
        try {
            await deleteCompany(id)
                .unwrap();
        } catch (error) {
            console.log("error deleting a company", error);
        }
    };

    const updateCompanyMutation = async (company) => {
        try {
            await updateCompany(company)
                .unwrap();
            setCompToUpdate(undefined);
        } catch (error) {
            console.log("error updating a company", error);
        }
    };

    return (<>
        <AddCompany addNewCompanyMutation={addNewCompanyMutation} updateCompanyMutation={updateCompanyMutation} companyToUpdate={compToUpdate} />
        <ShowCompanies companies={companies} deleteCompanyMutation={deleteCompanyMutation} updateCompany={setCompToUpdate} />
    </>)
};
