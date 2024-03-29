import ShowCompanies from "../components/ShowCompanies";
import AddCompany from "../components/AddCompany";
import { useAddNewCompanyMutation, useGetCompaniesQuery, useDeleteCompanyMutation } from "../../api";


const AddShowCompaniesContainer = () => {
    const { data: companies = []} = useGetCompaniesQuery();
    const [addNewCompany] = useAddNewCompanyMutation();
    const [deleteCompany] = useDeleteCompanyMutation();

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

    return (<>
        <AddCompany addNewCompanyMutation={addNewCompanyMutation} />
        <ShowCompanies companies={companies} deleteCompanyMutation={deleteCompanyMutation} />
    </>)
}

export default AddShowCompaniesContainer;