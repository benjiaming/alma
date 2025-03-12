import React from 'react';
import DataTable from 'react-data-table-component';
import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderContainer, StyledTable } from './StyledComponents';


interface Lead {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    linkedInProfile: string;
    submitted: string;
    status: string;
    country: string;
}

interface LeadsTableProps {
    columns: any[];
    data: Lead[];
    loading: boolean;
    error: string;
}

const LeadsTable: React.FC<LeadsTableProps> = ({ columns, data, loading, error }) => (
    <StyledTable>
        {loading ? (
            <LoaderContainer>
                <ClipLoader size={50} color={"#123abc"} loading={true} />
            </LoaderContainer>
        ) : (
            <>
                {error && <p>{error}</p>}
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                />
            </>
        )}
    </StyledTable>
);

export default LeadsTable;