import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another method
        this.login({ email, password });
        //useraccount ban gya hai toh seedha login hi krwa do na
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite error: getcurrentuser :: ", error);
    }
    return null;
  }

  async logout(){
      try {
            await this.account.deleteSessions()
      } catch (error) {
            console.log("appwrite error : logout :: ", error);
            
      }
  }
}

const authService = new AuthService();

export default authService;
