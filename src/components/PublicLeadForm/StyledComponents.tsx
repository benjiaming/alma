import styled from 'styled-components';
import Select from 'react-select';
import Image, { StaticImageData } from 'next/image';

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