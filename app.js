// // document.getElementById('writeButton').addEventListener('click', async () => {
// //     const name = document.getElementById('nameInput').value;
// //     if ('NDEFWriter' in window) {
// //         try {
// //             const ndef = new NDEFWriter();
// //             await ndef.write({ records: [{ recordType: "text", data: name }] });
// //             document.getElementById('message').textContent = 'Name written to NFC tag!';
// //         } catch (error) {
// //             document.getElementById('message').textContent = `Error: ${error}`;
// //         }
// //     } else {
// //         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
// //     }
// // });

// document.getElementById('writeButton').addEventListener('click', async () => {
//     const name = document.getElementById('nameInput').value;
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.write("Hello World").then(() => {
//                 document.getElementById('message').textContent = 'Message written.';
//             }).catch(error => {
//                 document.getElementById('message').textContent = `Write failed :-( try again: ${error}.`;
//             });
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });

// document.getElementById('readButton').addEventListener('click', async () => {
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.scan();
//             ndef.onreading = event => {
//                 const decoder = new TextDecoder();
//                 for (const record of event.message.records) {
//                     document.getElementById('message').textContent = `NFC Tag contains: ${decoder.decode(record.data)}`;
//                 }
//             };
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });



// document.getElementById('writeButton').addEventListener('click', async () => {
//     const fullName = document.getElementById('fullName').value;
//     const age = document.getElementById('age').value;
//     const gender = document.getElementById('gender').value;
//     const bloodType = document.getElementById('bloodType').value;
//     const drugAllergies = document.getElementById('drugAllergies').value;
//     const foodAllergies = document.getElementById('foodAllergies').value;
//     const environmentalAllergies = document.getElementById('environmentalAllergies').value;
//     const diabetes = document.getElementById('diabetes').value;
//     const hypertension = document.getElementById('hypertension').value;
//     const asthma = document.getElementById('asthma').value;

//     const message = `
//         Basic Patient Information
//         FullName: ${fullName}
//         Age: ${age}
//         Gender: ${gender}
//         BloodType: ${bloodType}

//         Allergies
//         Drug: ${drugAllergies}
//         Food: ${foodAllergies}
//         Environmental: ${environmentalAllergies}

//         Chronic Conditions
//         Diabetes: ${diabetes}
//         Hypertension: ${hypertension}
//         Asthma: ${asthma}
//     `;

//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.write(message).then(() => {
//                 document.getElementById('message').textContent = 'Message written.';
//             }).catch(error => {
//                 document.getElementById('message').textContent = `Write failed :-( try again: ${error}.`;
//             });
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });

// document.getElementById('readButton').addEventListener('click', async () => {
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.scan();
//             ndef.onreading = event => {
//                 const decoder = new TextDecoder();
//                 for (const record of event.message.records) {
//                     document.getElementById('message').textContent = `NFC Tag contains: ${decoder.decode(record.data)}`;
//                 }
//             };
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });

// newcode

// document.getElementById('writeButton').addEventListener('click', async () => {
//     const fullName = document.getElementById('fullName').value;
//     const age = document.getElementById('age').value;
//     const gender = document.getElementById('gender').value;
//     const bloodType = document.getElementById('bloodType').value;
//     const drugAllergies = document.getElementById('drugAllergies').value;
//     const foodAllergies = document.getElementById('foodAllergies').value;
//     const environmentalAllergies = document.getElementById('environmentalAllergies').value;
//     const diabetes = document.getElementById('diabetes').value;
//     const hypertension = document.getElementById('hypertension').value;
//     const asthma = document.getElementById('asthma').value;
//     const heartDisease = document.getElementById('heartDisease').value;
//     const kidneyDisease = document.getElementById('kidneyDisease').value;
//     const currentMedications = document.getElementById('currentMedications').value;
//     const medicationChanges = document.getElementById('medicationChanges').value;
//     const surgeries = document.getElementById('surgeries').value;
//     const illnesses = document.getElementById('illnesses').value;
//     const emergencyContactName = document.getElementById('emergencyContactName').value;
//     const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
//     const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
//     const tetanus = document.getElementById('tetanus').value;
//     const covid19 = document.getElementById('covid19').value;
//     const otherImmunizations = document.getElementById('otherImmunizations').value;
//     const smoker = document.getElementById('smoker').value;
//     const alcohol = document.getElementById('alcohol').value;
//     const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
//     const physicianName = document.getElementById('physicianName').value;
//     const physicianContact = document.getElementById('physicianContact').value;
//     const insuranceProvider = document.getElementById('insuranceProvider').value;
//     const insurancePolicy = document.getElementById('insurancePolicy').value;

//     const message = `
//         Basic Patient Information
//         FullName: ${fullName}
//         Age: ${age}
//         Gender: ${gender}
//         BloodType: ${bloodType}

//         Allergies
//         Drug: ${drugAllergies}
//         Food: ${foodAllergies}
//         Environmental: ${environmentalAllergies}

//         Chronic Conditions
//         Diabetes: ${diabetes}
//         Hypertension: ${hypertension}
//         Asthma: ${asthma}
//         Heart Disease: ${heartDisease}
//         Kidney Disease: ${kidneyDisease}

//         Medications
//         Current: ${currentMedications}
//         Changes: ${medicationChanges}

//         Past Medical History
//         Surgeries: ${surgeries}
//         Illnesses: ${illnesses}

//         Emergency Contact
//         Name: ${emergencyContactName}
//         Relationship: ${emergencyContactRelationship}
//         Phone: ${emergencyContactPhone}

//         Immunization Records
//         Tetanus: ${tetanus}
//         COVID-19: ${covid19}
//         Other: ${otherImmunizations}

//         Lifestyle Factors (Optional)
//         Smoker: ${smoker}
//         Alcohol: ${alcohol}
//         Dietary Restrictions: ${dietaryRestrictions}

//         Physician Details
//         Name: ${physicianName}
//         Contact: ${physicianContact}

//         Insurance Information
//         Provider: ${insuranceProvider}
//         Policy: ${insurancePolicy}
//     `;

//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.write(message).then(() => {
//                 document.getElementById('message').textContent = 'Message written.';
//             }).catch(error => {
//                 document.getElementById('message').textContent = `Write failed :-( try again: ${error}.`;
//             });
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });

// document.getElementById('readButton').addEventListener('click', async () => {
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.scan();
//             ndef.onreading = event => {
//                 const decoder = new TextDecoder();
//                 for (const record of event.message.records) {
//                     document.getElementById('message').textContent = `NFC Tag contains: ${decoder.decode(record.data)}`;
//                 }
//             };
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });


// latest code

// document.getElementById('writeButton').addEventListener('click', async () => {
//     const fullName = document.getElementById('fullName').value;
//     const age = document.getElementById('age').value;
//     const gender = document.getElementById('gender').value;
//     const bloodType = document.getElementById('bloodType').value;
//     const drugAllergies = document.getElementById('drugAllergies').value;
//     const foodAllergies = document.getElementById('foodAllergies').value;
//     const environmentalAllergies = document.getElementById('environmentalAllergies').value;
//     const diabetes = document.getElementById('diabetes').value;
//     const hypertension = document.getElementById('hypertension').value;
//     const asthma = document.getElementById('asthma').value;
//     const heartDisease = document.getElementById('heartDisease').value;
//     const kidneyDisease = document.getElementById('kidneyDisease').value;
//     const currentMedications = document.getElementById('currentMedications').value;
//     const medicationChanges = document.getElementById('medicationChanges').value;
//     const surgeries = document.getElementById('surgeries').value;
//     const illnesses = document.getElementById('illnesses').value;
//     const emergencyContactName = document.getElementById('emergencyContactName').value;
//     const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
//     const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
//     const tetanus = document.getElementById('tetanus').value;
//     const covid19 = document.getElementById('covid19').value;
//     const otherImmunizations = document.getElementById('otherImmunizations').value;
//     const smoker = document.getElementById('smoker').value;
//     const alcohol = document.getElementById('alcohol').value;
//     const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
//     const physicianName = document.getElementById('physicianName').value;
//     const physicianContact = document.getElementById('physicianContact').value;
//     const insuranceProvider = document.getElementById('insuranceProvider').value;
//     const insurancePolicy = document.getElementById('insurancePolicy').value;

//     const message = `
//         1.PI|FN:${fullName}|A:${age}|G:${gender}|BT:${bloodType}
//         2.AL|D:${drugAllergies}|F:${foodAllergies}|E:${environmentalAllergies}
//         3.CC|D:${diabetes}|H:${hypertension}|A:${asthma}|HD:${heartDisease}|KD:${kidneyDisease}
//         4.MED|C:${currentMedications}|CH:${medicationChanges}
//         5.PMH|S:${surgeries}|I:${illnesses}
//         6.EC|N:${emergencyContactName}|R:${emergencyContactRelationship}|P:${emergencyContactPhone}
//         7.IMM|T:${tetanus}|C:${covid19}|O:${otherImmunizations}
//         8.LF|S:${smoker}|A:${alcohol}|DR:${dietaryRestrictions}
//         9.PHY|N:${physicianName}|C:${physicianContact}
//         10.INS|P:${insuranceProvider}|PN:${insurancePolicy}
//     `.trim();

//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.write(message).then(() => {
//                 document.getElementById('message').textContent = 'Message written.';
//             }).catch(error => {
//                 document.getElementById('message').textContent = `Write failed :-( try again: ${error}.`;
//             });
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });

// document.getElementById('readButton').addEventListener('click', async () => {
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.scan();
//             ndef.onreading = event => {
//                 const decoder = new TextDecoder();
//                 for (const record of event.message.records) {
//                     document.getElementById('message').textContent = `NFC Tag contains: ${decoder.decode(record.data)}`;
//                 }
//             };
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//     }
// });



// latest code
document.getElementById('writeButton').addEventListener('click', async () => {
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bloodType = document.getElementById('bloodType').value;
    const drugAllergies = document.getElementById('drugAllergies').value;
    const foodAllergies = document.getElementById('foodAllergies').value;
    const environmentalAllergies = document.getElementById('environmentalAllergies').value;
    const diabetes = document.getElementById('diabetes').value;
    const hypertension = document.getElementById('hypertension').value;
    const asthma = document.getElementById('asthma').value;
    const heartDisease = document.getElementById('heartDisease').value;
    const kidneyDisease = document.getElementById('kidneyDisease').value;
    const currentMedications = document.getElementById('currentMedications').value;
    const medicationChanges = document.getElementById('medicationChanges').value;
    const surgeries = document.getElementById('surgeries').value;
    const illnesses = document.getElementById('illnesses').value;
    const emergencyContactName = document.getElementById('emergencyContactName').value;
    const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
    const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
    const tetanus = document.getElementById('tetanus').value;
    const covid19 = document.getElementById('covid19').value;
    const otherImmunizations = document.getElementById('otherImmunizations').value;
    const smoker = document.getElementById('smoker').value;
    const alcohol = document.getElementById('alcohol').value;
    const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
    const physicianName = document.getElementById('physicianName').value;
    const physicianContact = document.getElementById('physicianContact').value;
    const insuranceProvider = document.getElementById('insuranceProvider').value;
    const insurancePolicy = document.getElementById('insurancePolicy').value;

    const message = `
        1.PI|FN:${fullName}|A:${age}|G:${gender}|BT:${bloodType}
        2.AL|D:${drugAllergies}|F:${foodAllergies}|E:${environmentalAllergies}
        3.CC|D:${diabetes}|H:${hypertension}|A:${asthma}|HD:${heartDisease}|KD:${kidneyDisease}
        4.MED|C:${currentMedications}|CH:${medicationChanges}
        5.PMH|S:${surgeries}|I:${illnesses}
        6.EC|N:${emergencyContactName}|R:${emergencyContactRelationship}|P:${emergencyContactPhone}
        7.IMM|T:${tetanus}|C:${covid19}|O:${otherImmunizations}
        8.LF|S:${smoker}|A:${alcohol}|DR:${dietaryRestrictions}
        9.PHY|N:${physicianName}|C:${physicianContact}
        10.INS|P:${insuranceProvider}|PN:${insurancePolicy}
    `.trim();

    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.write(message).then(() => {
                document.getElementById('message').textContent = 'Message written.';
            }).catch(error => {
                document.getElementById('message').textContent = `Write failed :-( try again: ${error}.`;
            });
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
    }
});

document.getElementById('readButton').addEventListener('click', async () => {
    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            ndef.onreading = event => {
                const decoder = new TextDecoder();
                for (const record of event.message.records) {
                    const data = decoder.decode(record.data);
                    const newWindow = window.open();
                    newWindow.document.write(`
                        <html>
                        <head>
                            <title>NFC Tag Data</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f4f4f4;
                                    margin: 0;
                                    padding: 20px;
                                }
                                .container {
                                    background-color: #fff;
                                    padding: 20px;
                                    border-radius: 8px;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                }
                                h1 {
                                    text-align: center;
                                    color: #333;
                                }
                                p {
                                    color: #333;
                                }
                                a {
                                    color: #007bff;
                                    text-decoration: none;
                                }
                                a:hover {
                                    text-decoration: underline;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h1>NFC Tag Data</h1>
                                <pre>${data}</pre>
                                <p><a href="tel:${document.getElementById('physicianContact').value}">Call Physician</a></p>
                                <p><a href="tel:${document.getElementById('emergencyContactPhone').value}">Call Emergency Contact</a></p>
                            </div>
                        </body>
                        </html>
                    `);
                }
            };
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
    }
});
