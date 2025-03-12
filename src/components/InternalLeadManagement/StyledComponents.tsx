import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    position: relative;
`;

export const GradientBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 25%;
    background: radial-gradient(ellipse at top, #F9FDD1, transparent);
    
    z-index: -1; 
`;

export const SidebarContainer = styled.div`
    width: 200px;
    padding: 20px;
`;

export const Sidebar = styled.div`
    width: 200px;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarLink = styled.a<{ isActive?: boolean }>`
    display: block;
    padding: 10px 0;
    color: #333;
    text-decoration: none;
    font-weight: ${(props) => props.isActive ? 'bold' : 'normal'};
    &:hover {
        background-color: #ddd;
    }
`;

export const Content = styled.div`
    flex: 1;
    padding: 20px;
`;

export const StyledTable = styled.div`
    font-family: 'Arial', sans-serif;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);   
    margin: 20px 0;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
`;

export const SearchInput = styled.input`
    width: 300px; /* Set the width to 300px */
    padding: 10px 10px 10px 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 10px;
`;

export const Dropdown = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
`;
