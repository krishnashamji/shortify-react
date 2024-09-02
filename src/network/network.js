// // IMPORTS
import axios from 'axios';
import { BASE_URL } from '../utils/consts.js'

// URL CONSTRUCTION

// FETCH ALL DATA
async function allLinkData() {
    try {
        const response = await axios.get(`${BASE_URL}/urls`);
        console.log(response)
        return response;          
    } catch (error) {
        console.error('Error fetching link data:', error); 
        throw error;  
    }
}



// CREATE URL
// async function linkData() {
//     try {
//         const response = await axios.get(`${BASE_URL}/urls`);
//         return response;          
//     } catch (error) {
//         console.error('Error fetching link data:', error); 
//         throw error;  
//     }
// }

export { allLinkData }


