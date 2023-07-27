import { getList } from "@/service/PatientService";
import "bootstrap/dist/css/bootstrap.css";
export default function Home(props) {
    return (
        <div className="container" style={{ height: "100%" }}>
            <h1>Patient Management</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {props.covid.map((p, index) => {
                        return (
                            <tr key={index}>
                                <td>{p.Date}</td>
                                <td>{p.Confirmed}</td>
                                <td>{p.Deaths}</td>
                                <td>{p.Recovered}</td>
                                <td>{p.Active}</td>
                            </tr>
                        )
                    }

                    )}

                </tbody>

            </table>


        </div>
    )
}
export async function getServerSideProps() {
    const data = await getList();
    return ({
        props: {
            covid: data
        }
    })
}
