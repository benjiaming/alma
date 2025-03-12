import { NextApiRequest, NextApiResponse } from 'next';

const leads = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { firstName, lastName, email, linkedInProfile, visasOfInterest, resume, additionalInfo } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !linkedInProfile || !visasOfInterest || !resume) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // TODO: save to database
        return res.status(200).json({ message: 'Lead submitted successfully!', data: req.body });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default leads;