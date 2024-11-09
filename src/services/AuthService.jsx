// src/services/AuthService.jsx

import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const SECRET_KEY = 'your-secret-key'; // Use a strong key for encryption/decryption

class AuthService {
  static encryptData(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  }

  static decryptData(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  static setToken(token) {
    const encryptedToken = this.encryptData(token);
    Cookies.set('authToken', encryptedToken, { expires: 1 }); // Cookie expires in 1 day
  }

  static getToken() {
    const encryptedToken = Cookies.get('authToken');
    return encryptedToken ? this.decryptData(encryptedToken) : null;
  }

  static removeToken() {
    Cookies.remove('authToken');
  }

  static setUser(user) {
    const encryptedUser = this.encryptData(user);
    Cookies.set('authUser', encryptedUser, { expires: 1 });
  }

  static getUser() {
    const encryptedUser = Cookies.get('authUser');
    return encryptedUser ? this.decryptData(encryptedUser) : null;
  }

  static removeUser() {
    Cookies.remove('authUser');
  }
}

export default AuthService;
