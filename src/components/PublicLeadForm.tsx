import React, { useState } from 'react';
import countryList from 'react-select-country-list';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

import backgroundImage from '../assets/images/background.png';
import understandOptionsIcon from '../assets/icons/understand-options.png';
import { Container, FormWrapper, SubmitButton, BackgroundImageWrapper, ThankYouDialog, StyledH1, StyledP, Icon } from './ui/StyledComponents';
import { FormSections } from './PublicLeadForm/FormSections';

interface ErrorType {
    firstName?: { message: string, type: string };
    lastName?: { message: string, type: string };
    email?: { message: string, type: string };
    linkedInProfile?: { message: string, type: string };
    visasOfInterest?: { message: string, type: string };
    resume?: { message: string, type: string };
    countryOfCitizenship?: { message: string, type: string };
    additionalInfo?: { message: string, type: string };
}

const PublicLeadForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedInProfile: '',
        visasOfInterest: [],
        resume: null,
        additionalInfo: '',
        countryOfCitizenship: '',
    });

    const [errors, setErrors] = useState<ErrorType>({});
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, files, checked } = e.target;
        if (type === 'file') {
            setIsUploading(true);
            setTimeout(() => { // Simulate file upload delay
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [name]: files[0]
                }));
                setUploadedFileName(files[0].name);
                setIsUploading(false);
            }, 2000);
        } else if (type === 'checkbox') {
            setFormData((prevFormData) => {
                const newVisasOfInterest = checked
                    ? [...prevFormData.visasOfInterest, value]
                    : prevFormData.visasOfInterest.filter((visa) => visa !== value);
                return { ...prevFormData, [name]: newVisasOfInterest };
            });
        } else {
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        }
    };

    const handleCountryChange = (newValue: any) => {
        setFormData({ ...formData, countryOfCitizenship: newValue.value });
    };

    const handleRemoveFile = () => {
        setFormData({ ...formData, resume: null });
        setUploadedFileName('');
        const resumeInput = document.getElementById('resume') as HTMLInputElement | null;
        if (resumeInput) {
            resumeInput.value = ''; 
        }
    };

    const validateForm = (): ErrorType => {
        const newErrors: ErrorType = {};
        const MIN_ADDITIONAL_INFO_LENGTH = 10;
        if (!formData.firstName) newErrors.firstName = { message: 'First Name is required', type: 'required' };
        if (!formData.lastName) newErrors.lastName = { message: 'Last Name is required', type: 'required' };
        if (!formData.email) newErrors.email = { message: 'Email is required', type: 'required' };
        if (formData.visasOfInterest.length === 0) newErrors.visasOfInterest = { message: 'At least one Visa of Interest is required', type: 'required' };
        if (!formData.countryOfCitizenship) newErrors.countryOfCitizenship = { message: 'Country of Citizenship is required', type: 'required' };
        if (!formData.resume) newErrors.resume = { message: 'Resume is required', type: 'required' };
        if (!formData.linkedInProfile) newErrors.linkedInProfile = { message: 'LinkedIn / Personal Website URL is required', type: 'required' };
        if (!formData.linkedInProfile.match(/^(https?:\/\/)?([\w\d-]+\.)*[\w\d-]+\.\w{2,}(\/.*)?$/)) newErrors.linkedInProfile = { message: 'Invalid URL', type: 'invalid' };
        if (formData.additionalInfo.length < MIN_ADDITIONAL_INFO_LENGTH) newErrors.additionalInfo = { message: `Additional Info must be more than ${MIN_ADDITIONAL_INFO_LENGTH} characters`, type: 'invalid' };

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        // TODO: validate file size, file type, etc.
        if (Object.keys(validationErrors).length > 0) {
            console.log({ validationErrors });
            setErrors(validationErrors);
            return;
        }
        console.log({formData});
        setErrors({});

        setSubmissionStatus('Submitting...');
        // TODO: send form data to API
        setTimeout(() => {
            setSubmissionStatus('Submission successful!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                linkedInProfile: '',
                visasOfInterest: [],
                resume: null,
                additionalInfo: '',
                countryOfCitizenship: ''
            });
            setUploadedFileName('');
            setIsSubmitted(true);
        }, 2000);
    };

    const countryOptions = countryList().getData();

    return (
        <Container>
            <Container>
                <BackgroundImageWrapper>
                    <Image
                        src={backgroundImage}
                        alt=""
                        priority={true}
                        style={{
                            maxWidth: '100vh',
                            height: 'auto',
                        }}
                    />
                </BackgroundImageWrapper>
            </Container>
            {isSubmitted ? (
                <ThankYouDialog>
                    <Icon src={understandOptionsIcon} />
                    <StyledH1>Thank You</StyledH1>
                    <StyledP>Your submission was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.</StyledP>
                    <SubmitButton type="button" onClick={()=>setIsSubmitted(false)}>Go back to Homepage</SubmitButton>
                </ThankYouDialog>
            ) : (
                <FormWrapper>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Icon src={understandOptionsIcon} />
                            <StyledH1>Want to understand your visa options?</StyledH1>
                            <StyledP>Submit the form below and our team of experienced attorneys will review your information and send preliminary assessment of your case based on your goals.</StyledP>
                        </div>
                        <FormSections
                            formData={formData}
                            errors={errors}
                            handleChange={handleChange}
                            handleCountryChange={handleCountryChange}
                            handleRemoveFile={handleRemoveFile}
                            isUploading={isUploading}
                            uploadedFileName={uploadedFileName}
                            countryOptions={countryOptions}
                        />
                        {submissionStatus === 'Submitting...' ? (
                            <ClipLoader size={50} color={"#123abc"} loading={true} />
                        ) : (
                            <SubmitButton type="submit">Submit</SubmitButton>
                        )}
                    </form>
                </FormWrapper>
            )}
        </Container>
    );
};


export default PublicLeadForm;