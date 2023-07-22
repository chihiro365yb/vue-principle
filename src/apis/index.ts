import request from '../utils/request';

export async function getUsers() {
    return await request('/api/user');
}
