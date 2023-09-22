import useFetch from "../customize/fetch"
const CustomersList = () => {
    const { Data: Data1, loading, isError } = useFetch('https:reqres.in/api/users?page=1')
    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    isError === false && loading === false && Data1 && Data1.length > 0 && Data1.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td><img src={item.avatar} alt='pic' /></td>
                            </tr>
                        )
                    })
                }
                {
                    loading === true &&
                    <tr>
                        <td colSpan={5}>Loading...</td>
                    </tr>
                }
                {isError === true &&
                    <tr>
                        <td colSpan={5}>Something wrong</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}
export default CustomersList;