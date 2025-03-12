import React from 'react';
import { ClipLoader } from 'react-spinners';
import Image from 'next/image';

import {
    StyledInput,
    StyledTextarea,
    StyledSelect,
    ErrorMessage,
    ResumeUploadButton,
    HiddenInput,
    UploadedFileBox,
    CloseButton,
    StyledH1,
    Icon
} from '../ui/StyledComponents';

import diceIcon from 'assets/icons/dice.png';
import heartIcon from 'assets/icons/heart.png';
import resumeIcon from 'assets/icons/resume.png'

// TODO: i18n?
const CURRENT_STATUS = `
What is your current status and when does it expire?
What is your past immigration history? 
Are you looking for long term permanent residency or short-term employment visa or both?
Are there any timeline considerations?
`;

interface FormSectionsProps {
    formData: any;
    errors: any;
    handleChange: (e: any) => void;
    handleCountryChange: (newValue: any) => void;
    handleRemoveFile: () => void;
    isUploading: boolean;
    uploadedFileName: string;
    countryOptions: any;
}

// TODO: In real-world project we would use Formik or react-hook-form for form handling
// and yup for validation
export const FormSections: React.FC<FormSectionsProps> = ({
    formData,
    errors,
    handleChange,
    handleCountryChange,
    handleRemoveFile,
    isUploading,
    uploadedFileName,
    countryOptions
}) => (
    <>
        <div>
            <StyledInput type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" aria-describedby="firstNameError" required={true} />
            {errors.firstName && <ErrorMessage id="firstNameError">{errors.firstName.message}</ErrorMessage>}
        </div>
        <div>
            <StyledInput type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" aria-describedby="lastNameError" required={true} />
            {errors.lastName && <ErrorMessage id="lastNameError">{errors.lastName.message}</ErrorMessage>}
        </div>
        <div>
            <StyledInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" aria-describedby="emailError" required={true} />
            {errors.email && <ErrorMessage id="emailError">{errors.email.message}</ErrorMessage>}
        </div>
        <div>
            <StyledSelect
                id="countryOfCitizenship"
                name="countryOfCitizenship"
                options={countryOptions}
                onChange={handleCountryChange}
                placeholder="Country of Citizenship"
                aria-describedby="countryOfCitizenshipError"
                required={true} 
            />
            {errors.countryOfCitizenship && <ErrorMessage id="countryOfCitizenshipError">{errors.countryOfCitizenship.message}</ErrorMessage>}
        </div>
        <div>
            <StyledInput type="url" id="linkedInProfile" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} placeholder="LinkedIn / Personal Website URL" required />
            {errors.linkedInProfile && <ErrorMessage id="linkedInProfileError">{errors.linkedInProfile.message}</ErrorMessage>}
        </div>
        <div>
            {isUploading ? (
                <ClipLoader size={50} color={"#123abc"} loading={isUploading} />
            ) : uploadedFileName ? (
                <UploadedFileBox>
                    <span>{uploadedFileName}</span>
                    <CloseButton onClick={handleRemoveFile}>×</CloseButton>
                </UploadedFileBox>
            ) : (
                <ResumeUploadButton htmlFor="resume">
                    <Image src={resumeIcon} alt="Upload resume" height={50} width={230} />
                </ResumeUploadButton>
            )}
            <HiddenInput type="file" id="resume" name="resume" onChange={handleChange} />
            {errors.resume && <div><ErrorMessage id="resumeError">{errors.resume.message}</ErrorMessage></div>}
        </div>
        <div>
            <Icon src={diceIcon} />
            <StyledH1>Visa categories of interest?</StyledH1>
            <div>
                <input type="checkbox" id="O-1" name="visasOfInterest" value="O-1" onChange={handleChange} />
                <label htmlFor="O-1">O-1</label>
            </div>
            <div>
                <input type="checkbox" id="EB-1A" name="visasOfInterest" value="EB-1A" onChange={handleChange} />
                <label htmlFor="EB-1A">EB-1A</label>
            </div>
            <div>
                <input type="checkbox" id="EB2-NIW" name="visasOfInterest" value="EB2-NIW" onChange={handleChange} />
                <label htmlFor="EB2-NIW">EB2-NIW</label>
            </div>
            <div>
                <input type="checkbox" id="unknown" name="visasOfInterest" value="unknown" onChange={handleChange} />
                <label htmlFor="unknown">I don't know</label>
            </div>
            {errors.visasOfInterest && <ErrorMessage id="visasOfInterestError">{errors.visasOfInterest.message}</ErrorMessage>}
        </div>
        <div>
            <Icon src={heartIcon} />
            <StyledH1>How can we help you?</StyledH1>
            <StyledTextarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder={CURRENT_STATUS} height={100} required />
            {errors.additionalInfo && <ErrorMessage id="additionalInfoError">{errors.additionalInfo.message}</ErrorMessage>}
        </div>
    </>
);