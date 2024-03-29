const ShowCompanies = ({ companies = [], deleteCompanyMutation, updateCompany }) => {

    return (<ol>
        {companies.map((cmp) => 
        <li key={cmp.id}>
            {cmp.name}----{cmp.address}
            <button onClick={() => deleteCompanyMutation(cmp.id)}>delete</button>
            <button onClick={() => updateCompany(cmp)}>update</button>
        </li>)}
    </ol>);
}

export default ShowCompanies;