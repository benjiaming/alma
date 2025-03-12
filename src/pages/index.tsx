import React from 'react';

import dynamic from 'next/dynamic'
 
const PublicLeadForm = dynamic(() => import('../components/PublicLeadForm'), { ssr: true })
 
const Home = () => {
    return (
        <div>
            <PublicLeadForm />
        </div>
    );
};

export default Home;