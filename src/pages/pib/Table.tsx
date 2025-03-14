import PibTable from "../../components/pibtable/PibTable";
import { CiViewTable } from "react-icons/ci";

const Table = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="font-bold flex justify-center items-center text-4xl mb-4">
                <CiViewTable />
            </h1>
            <PibTable />
        </div>
    );
};

export default Table;
