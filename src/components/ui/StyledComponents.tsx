import styled from 'styled-components';
import Select from 'react-select';
import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Icon: React.FC<{ src: StaticImageData }> = ({ src }) => <Container>
    <Image src={src} alt="" width={50} height={50} />
</Container>

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    font-family: 'Arial', sans-serif;
`;

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

export const StyledTextarea = styled.textarea<{ height: number }>`
    width: 100%;
    height: ${(props) => props.height}px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const StyledSelect = styled(Select)`
    width: 104%;
    margin: 10px 0;
    border-radius: 18px;
    font-size: 14px;
`;

export const StyledH1 = styled.h1`
    font-size: 18px;
    text-align: center;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #333;
    }
`;

export const BackgroundImageWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    @media (max-width: 100vh) {
        display: none;
    }
`;

export const ResumeUploadButton = styled.label`
    display: inline-block;
    margin: 10px 0;
    cursor: pointer;
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const UploadedFileBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 16px;
    cursor: pointer;
`;

export const ThankYouDialog = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

export const StyledP = styled.p`
    font-size: 14px;
    text-align: center;
    font-weight: bold;
`;


export const SmallContainer = styled.div`
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

export const LoginContainer = styled.div`
    display: flex;
    position relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 200px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
