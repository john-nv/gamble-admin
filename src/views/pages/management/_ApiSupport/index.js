import axios from 'axios';

const apiNodeSupport = () => 'http://localhost:7171'

const getSupportLink = async () => {
    let phone = ''
    await axios.get(apiNodeSupport() + '/contacts').then(response => { phone = response.data[0].phone; })
    return phone
}

const updatePhoneNumber = async (phone) => {
    try {
        const params = new URLSearchParams();
        params.append('phone', phone);

        const response = await axios.post(
            apiNodeSupport() + '/contacts',
            params.toString(),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        return response.status === 200 ? 1 : 0;
    } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
        return 0;
    }
};


export default {
    getSupportLink,
    updatePhoneNumber,
}