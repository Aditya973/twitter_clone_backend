import { UserRepository } from "../repositories/index.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        }
        catch (error) {
            console.log('something went wrong in the service layer');
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({ email });
            return user;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if (!user) {
                throw {
                    message: 'no user found'
                };
            }
            if (!user.comparePassword(data.password)) {
                throw {
                    message: 'invalid password'
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw error;
        }
    }
}

export default UserService;