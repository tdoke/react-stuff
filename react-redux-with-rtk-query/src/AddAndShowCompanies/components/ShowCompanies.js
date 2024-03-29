const ShowCompanies = ({ companies = [], deleteCompanyMutation }) => {

    return (<ol>
        {companies.map((cmp) => 
        <li key={cmp.id}>
            {cmp.name}----{cmp.address}
            <button onClick={() => deleteCompanyMutation(cmp.id)}>delete</button>
        </li>)}
    </ol>);
}

export default ShowCompanies;