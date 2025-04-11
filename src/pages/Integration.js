import React, { useState } from 'react';
import { FaGoogleWallet } from 'react-icons/fa';
import * as jose from 'jose';

const Integration = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [walletUrl, setWalletUrl] = useState('');

    const generateJWT = async () => {
        const serviceAccount = {
            "issuerId": "3388000000022913135",
            "classId": "hrb-wallet-dev",
            "client_email": "qr-code-service@hrb-wallet.iam.gserviceaccount.com"
        };

        const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD8Wl5IAmxGQttG
197cblS97KTswEdcANCoSg/E+U9qoCATmKrYKW/eCVDdGXyr515gHA2tZa0A/f2p
BD/aoxANEk1K/+vYSJxR2M009UUeXrRWNqA9vlQ60IfqKVRRD6QjP07iQyDDe9eF
7w4wkfCw3AMS5okA2r2X2Iwz0xXHq04sfmfDSl8TpcZrn3tESrOq+BN6xsOe7EXz
mdBj9Mz23tLt50Ku1ez3XPm4qraNu6x4Q4V9DldwxADn3do7Kr4lsPQw8Kq1P+7q
vMW6AZdEuhsInfj+FHlmt883YPtY414zNavhr37w3GXByxl9+VdhQusyKiW3rlT3
usgB0J+LAgMBAAECggEABGHFVVbFbormp9pDwmwgCJQ9YOcN1ikldmai03bIzD8v
j2eNP+eoS6C5yL0SjyGbX+vcyPAFCwleCDtMqI1AUBnLQcwj2kOYg0tSdOL1akuW
shCMw8W0TLkmQwiosCenX/1Pb1pfDUXvPiIiivFdzpRjcUaThnJF7IcUGCpILIli
JFvv5kIysxPMTGagoh0xbqL1AXSS2B8kwWglAv6vuqJsXKngBkkiaUIxSV2eFMBT
7R7XzcgjL5wIXba3a/U8Va9ywuvOFdukpROG5S6HgTy7TRYdNSG8sBcLNKvQauEw
YHIRuUSB27FoX8ygAiIPCF7ZAYICJEi1iUHJEml3YQKBgQD/lRMj4SXK1XHGH/Oe
3xuvdKdvLcePMsSMfmTrwONS70LR5Va4NGEK4O3L3gdKWNS1GDyyaoHyApa1tb7a
SXYR+i0mc7Y6XDZ02B7NvKNnmodEFHNHd1TcmoY/TPcxdY+XpQXLi4MdIFS8b1lb
BIOSOjmYPhXi94RHFaQH1Z5qwwKBgQD8w/FH43h/QpcfS3aJ5P9th6la31AfHsXl
bOfdLpvjAxN03cUGnjBW+fQ7ADpEiAtBvBXp4J8TJ0Q+p8Epol+SxIim9rCKEY/j
MLj4R7udC8a9WYdPKk3TRqFMfjR0P6XTr2FUHPuJz8uVQR90EYPnsvxquAM+L40T
SivSkxrbmQKBgQDAVsfYsI9oXckJePI2FWEYYYm/uYv80A/qSxRX9wkcWMLIgvcI
GSMOtMdALQ7/fGpW/q5u9ohkQF560ROX4sDgNo3T6jCxKsQwmpRT8CpoxXoWWe2H
Ut6iRgfRi3Jb3kT5sk7yJ0O8n6AlTwbH4FXDrd26HL8L14nMlRSkcLaPUQKBgAwQ
bhu4R7ALRZtAxs+eFnLr3rFvpytVFKz2nbp41wfmxa72RskiE7yTAY0vXZiXxbHF
gGZBSlZnsWIsL5QFI/qlVsBhVdvBKtT1Jl7zTYkZXsr60vJ8WmqTHG/CNk62GvwX
itWw7HCPcnAVQ6MOkvUkHdgaIE1/h4Q8LgtG6ilBAoGAQoFXSlF22Q0LgwkmBe3d
da6SGdRI0Rh9x2BjWKyBBtK3DYc3EeThX6Vt8pjlUCbahKS8ONW26G7Rfff9tqs4
+w4pDHvibMkUW+V3ts1G9lnmBAPdlaUh50SuwyZdrHw4uoxBCedCn17ShQDZCvL2
CIAtCH4Ts5nSnIVPb2dCUwo=
-----END PRIVATE KEY-----`;

        const payload = {
            iss: serviceAccount.client_email,
            aud: "google",
            typ: "savetowallet",
            iat: Math.floor(Date.now() / 1000),
            payload: {
                genericObjects: [{
                    id: `${serviceAccount.issuerId}.${serviceAccount.classId}`,
                    classId: `${serviceAccount.issuerId}.${serviceAccount.classId}`,
                    genericType: "GENERIC_TYPE_UNSPECIFIED",
                    hexBackgroundColor: "#4285f4",
                    logo: {
                        sourceUri: {
                            uri: "https://storage.googleapis.com/wallet-lab-tools-codelab-artifacts-public/pass_google_logo.jpg"
                        }
                    },
                    cardTitle: {
                        defaultValue: {
                            language: "en",
                            value: "Hassan Rafay's LinkedIn"
                        }
                    },
                    subheader: {
                        defaultValue: {
                            language: "en",
                            value: "Connect with me on LinkedIn"
                        }
                    },
                    header: {
                        defaultValue: {
                            language: "en",
                            value: "Hassan Rafay"
                        }
                    },
                    barcode: {
                        type: "QR_CODE",
                        value: "https://www.linkedin.com/in/hassanrafay/"
                    },
                    linksModuleData: {
                        uris: [{
                            uri: "https://www.linkedin.com/in/hassanrafay/",
                            description: "Visit my LinkedIn profile"
                        }]
                    }
                }]
            }
        };

        const key = await jose.importPKCS8(privateKey, 'RS256');
        const token = await new jose.SignJWT(payload)
            .setProtectedHeader({ alg: 'RS256' })
            .sign(key);

        return token;
    };

    const handleGoogleWallet = async () => {
        try {
            setIsLoading(true);
            const jwtToken = await generateJWT();
            const saveToWalletUrl = `https://pay.google.com/gp/v/save/${jwtToken}`;
            setWalletUrl(saveToWalletUrl);
        } catch (error) {
            console.error('Error in Google Wallet integration:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Integration</h1>
                <div className="bg-gray-800 rounded-lg p-6">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <button
                            onClick={handleGoogleWallet}
                            disabled={isLoading}
                            className={`flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <FaGoogleWallet className="text-blue-600 text-3xl" />
                            <span>{isLoading ? 'Generating...' : 'Add to Google Wallet'}</span>
                        </button>

                        {walletUrl && (
                            <a
                                href={walletUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                <FaGoogleWallet className="text-white text-3xl" />
                                <span>Open in Google Wallet</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integration; 