// to update the person in stripe account

// http://localhost:4200/driveraccount/5e7491aef33c9a4131387a75/update


await stripe.accounts.updatePerson(
    'acct_1GOhTwBTFhcW8pRB',
    'person_GwXw5FRL0NI77p', {
        dob: {
            day: "21",
            month: "03",
            year: "1998"
        },
        address: {
            city: "New York",
            country: 'US',
            line1: "street 1",
            line2: "street 2",
            postal_code: "11001",
            state: "NY",
        },
        relationship: {
            director: true,
            executive: false,
            owner: false,
            percent_ownership: null,
            representative: false,
            title: "manager"
        },
        ssn_last_4: "1234",
        phone: '(555)678-1212',
        email: "svashishtha34@gmail.com",
        "verification": {
            "document": {
                "back": "/home/vahishtha/Desktop/abc.png",
                // "details": null,
                // "details_code": null,
                "front": "/home/vahishtha/Desktop/abc.png"
            },
        }

    },
    function(err, person) {
        // asynchronously called
        console.log(person)
    }
);























await stripe.accounts.createPerson(

    'acct_1GOhTwBTFhcW8pRB', {
        first_name: body.personFirstName,
        last_name: body.personLastName,
        dob: {
            day: body.personDobDay,
            month: body.personDobMonth,
            year: body.personDobYear
        },
        address: {
            city: body.personAdressCity,
            country: body.personAdressCountry,
            line1: body.personAdressLine1,
            line2: body.personAdressLine2,
            postal_code: body.personAdressPostalCode,
            state: body.personAdressState,

        },
        relationship: {
            director: false,
            executive: true,
            owner: false,
            percent_ownership: null,
            representative: true,
            title: "manager"
        },
        ssn_last_4: body.ssn,
        phone: body.personPhone,
        email: body.personEmail,

    },
    async function(err, person) {
        console.log(person)
            //  await driver.person_id = person.id;
    }
);