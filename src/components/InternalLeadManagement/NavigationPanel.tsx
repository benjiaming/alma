import React from 'react';
import { SidebarContainer, SidebarLink, StyledImage } from '../ui/StyledComponents';
import almaImage from '../../assets/images/alma.png';


const NavigationPanel = () => (
    <SidebarContainer>
        <StyledImage src={almaImage} alt="Alma" priority={true} />
        <SidebarLink isActive={true}>Leads</SidebarLink>
        <SidebarLink>Settings</SidebarLink>
    </SidebarContainer>
);

export default NavigationPanel;