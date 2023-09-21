import axiosClient from './AxiosClient';

const ShopperApi = {
    getCode: async (email: string): Promise<any> => {
        const url = '/user/get-code-verify-email';
        return await axiosClient.get(url, { params: { email } });
    },

    verifyEmail: async (
        email: string,
        code: string,
        latitude: number,
        longitude: number,
        pushNotificationDeviceId: string,
        localeCode: string,
    ): Promise<any> => {
        const url = '/user/verify-email';
        return await axiosClient.post(url, {
            email,
            code,
            latitude,
            longitude,
            localeCode,
            pushNotificationDeviceId,
        });
    },






};

export default ShopperApi;
