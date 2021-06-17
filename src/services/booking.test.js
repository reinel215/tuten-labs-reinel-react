import * as bookingService from './booking';
import API from '../config/API';



describe("Test the booking service", () => {

    it("should make a get request of bookings", async () => {

        let userInfo = {
            email: "example@gmail.com",
            adminEmail: "admin@gmail.com",
            current: true,
        }

        let responseData = {
            urlUsed: `/user/example@gmail.com/bookings`,
            app: "APP_BCK",
            adminEmail: "admin@gmail.com",
            current:true

        }

        //we make a mock over the put request
        API.get = jest.fn((...props) => {
            return {
                data: {
                    urlUsed: props[0],
                    app: props[1].headers.App,
                    adminEmail: props[1].headers.Adminemail,
                    current: props[1].params.current
                }
            }

        })


        const response = await bookingService.getBookings(userInfo);

        expect(API.get).toBeCalled();
        expect(response).toEqual(responseData);
    })

})