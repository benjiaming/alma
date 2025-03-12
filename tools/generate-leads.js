const fs = require('fs');
const { faker } = require('@faker-js/faker');
const countryList = require('react-select-country-list');

const generateLeads = (numLeads) => {
    const leads = [];
    const statuses = ['Pending', 'ReachedOut'];
    const countries = countryList().getData().map(country => country.label);

    for (let id = 1; id <= numLeads; id++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email({ firstName, lastName });
        const linkedInProfile = `https://www.linkedin.com/in/${faker.internet.username({ firstName, lastName })}`;
        const submitted = faker.date.past().toISOString();
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const country = countries[Math.floor(Math.random() * countries.length)];

        leads.push({
            id,
            firstName,
            lastName,
            email,
            linkedInProfile,
            submitted,
            status,
            country
        });
    }

    return leads;
};

const saveLeadsToFile = (leads, filePath) => {
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
};

const numLeads = parseInt(process.argv[2], 10);
if (isNaN(numLeads) || numLeads <= 0) {
    console.error('Please provide a valid number of leads to generate.');
    process.exit(1);
}

const leads = generateLeads(numLeads);
saveLeadsToFile(leads, './src/assets/leads.json');
console.log(`Generated ${numLeads} leads and saved to leads.json`);