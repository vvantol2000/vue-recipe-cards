import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getRecipes() {
        return apiClient.get('/recipe')
    },
    getRecipe(id) {
       return apiClient.get('/recipe/' + id)
    }
}