import * as authService from './auth';
import cookie from '../config/COOKIE_NAME';
import jsCookie from 'js-cookie';
import API from '../config/API';



describe("Test the auth service", () => {

    it("should make a login request", async () => {

        let userInfo = {
            email: "example@gmail.com",
            password: "1234"
        }

        let responseData = {
            urlUsed: `/user/example@gmail.com`,
            sessionTokenBck: "Token123456789",
            app: "APP_BCK",
            password: "1234"
        }

        //we make a mock over the put request
        API.put = jest.fn((...props) => {
            return {
                data: {
                    urlUsed: props[0],
                    sessionTokenBck: "Token123456789",
                    app: props[2].headers.App,
                    password: props[2].headers.Password
                }
            }

        })

        jsCookie.set = jest.fn();

        await authService.login(userInfo)
        expect(API.put).toBeCalled();
        expect(jsCookie.set).toBeCalledWith(cookie, responseData);


    })

})