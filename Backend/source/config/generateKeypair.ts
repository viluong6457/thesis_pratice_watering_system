import dotenv from "dotenv";
dotenv.config();

import fs from 'fs';
import crypto from 'node:crypto';


const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519', {
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: String(process.env.KEY_PASS),
    }});

fs.writeFileSync("./privateKey.pem", privateKey);
fs.writeFileSync("./publicKey.pem", publicKey);