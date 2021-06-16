import API from '../config/API';


export const getBookings = async ({ email, adminEmail, current }) => {
    const app = "APP_BCK";
    console.log("haciendo request loquita");
    const response = await API.get(`/user/${email}/bookings`,
        {
            headers: {
                App: app,
                Adminemail: adminEmail
            },
            params: {
                current
            }
        }
    );

    return response.data;
}