import React from 'react';
import dynamic from 'next/dynamic'
 
const InternalLeadManagement = dynamic(() => import('../components/InternalLeadManagement'), { ssr: false })


const InternalPage = () => {
    return (
        <div>
            <InternalLeadManagement />
        </div>
    );
};

export default InternalPage;