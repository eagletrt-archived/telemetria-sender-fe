import * as axios from 'axios';

const address = '192.168.8.102'
const url = `http://${address}:5000/api/collections`;
const urlCSV = `http://${address}:5000/api/collections/csv`;
const urlJSON = `http://${address}:5000/api/collections/json`;

// Get Collections
export async function getCollections() {
    const res = await axios.get(url);
    return res.data;
}

export async function exportCollectionsJSON(body) {
    const res = await axios.post(urlJSON, body, { responseType: 'blob' });
    return res.data;
}

export async function exportCollectionsCSV(body) {
    const res = await axios.post(urlCSV, body, { responseType: 'blob' });
    return res.data;
}
