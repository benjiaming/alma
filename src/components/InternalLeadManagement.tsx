import React, { useEffect, useState } from 'react';
import leadsData from '../assets/leads.json'; //TODO: Replace with actual API call

import { SmallContainer, Content, GradientBackground } from './ui/StyledComponents';
import SearchBar from './InternalLeadManagement/SearchBar';
import LeadsTable from './InternalLeadManagement/LeadsTable';
import NavigationPanel from './InternalLeadManagement/NavigationPanel';
import Login from './InternalLeadManagement/Login';


const InternalLeadManagement = () => {
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

    const [leads, setLeads] = useState<Lead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('status');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                // Simulate an API call with a delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setLeads(leadsData);
                setFilteredLeads(leadsData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    useEffect(() => {
        const filtered = leads.filter(lead => {
            const value = lead[filterCriteria as keyof Lead].toString().toLowerCase();
            return value.includes(search.toLowerCase());
        });
        setFilteredLeads(filtered);
    }, [search, leads, filterCriteria]);

    const handleChangeStatus = (id: number, newStatus: string) => {
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    };

    const columns = [
        {
            name: 'Name',
            selector: (row: Lead) => `${row.firstName} ${row.lastName}`,
            sortable: true,
        },
        {
            name: 'Submitted',
            selector: (row: Lead) => new Date(row.submitted).toLocaleString(),
            sortable: true,
        },
        {
            name: 'Status',
            cell: (row: Lead) => (
                <select
                    value={row.status}
                    onChange={(e) => handleChangeStatus(row.id, e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="ReachedOut">Reached Out</option>
                </select>
            ),
            sortable: true,
        },
        {
            name: 'Country',
            selector: (row: Lead) => row.country,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: Lead) => row.email,
            sortable: true,
        },
    ];


    if (!isAuthenticated) {
        return <Login onLogin={() => setIsAuthenticated(true)} />;
    }

    return (
        <SmallContainer>
            <GradientBackground />
            <NavigationPanel />
            <Content>
                <h1>Leads</h1>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    filterCriteria={filterCriteria}
                    setFilterCriteria={setFilterCriteria}
                />
                <LeadsTable
                    columns={columns}
                    data={filteredLeads}
                    loading={loading}
                    error={error}
                />
            </Content>
        </SmallContainer>
    );
};


export default InternalLeadManagement;