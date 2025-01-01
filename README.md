This is my submission for the Better Technologies internship.

This is a simple React Native application written in TypeScript that implements user authentication with a signup and login feature. The app includes features such as password strength validation, "Remember Me" functionality, and input validation for email and password.

Signup:
Users can create an account by providing a valid email and password.
Password strength is visually displayed using a custom password strength indicator.
User credentials are securely stored in AsyncStorage.

Login:
Users can log in using the credentials they created during signup.
The "Remember Me" feature saves login credentials and persists them across app restarts.
Validates email and password against the stored data.

UI Enhancements:
Light blue background with a sheer white box for content.
All fonts are styled using Times New Roman for a classic look.
User-friendly error messages for validation.

<h1>Technologies Used:</h1>

React Native: For building the mobile app.<br>
Formik: For handling form state and validation.<br>
Yup: For email and password validation.<br>
AsyncStorage: For storing user credentials locally.<br>
zxcvbn: For password strength evaluation.<br>

<h1>File Structure:</h1>

App.tsx: Main entry point of the app.<br>
src/screens/SignUpScreen.tsx: Signup screen implementation.<br>
src/screens/LoginScreen.tsx: Login screen implementation.<br>
src/components/PasswordStrengthMeter.tsx: Custom password strength meter component using zxcvbn.<br>

<h1>Screenshots:</h1>

<h1>Signup page :</h1>

![WhatsApp Image 2025-01-02 at 1 08 22 AM](https://github.com/user-attachments/assets/669a4ce1-2128-4cfc-9260-c0ddb5888214)


![WhatsApp Image 2025-01-02 at 1 08 22 AM (1)](https://github.com/user-attachments/assets/70ca6499-cae7-4b7d-a2c5-2a86f47c9976)


![WhatsApp Image 2025-01-02 at 1 08 23 AM](https://github.com/user-attachments/assets/b8dfd90b-29d9-4fa3-a2ae-cdfc0fc123f7)

<h1> Login page : </h1>

![WhatsApp Image 2025-01-02 at 1 08 23 AM (1)](https://github.com/user-attachments/assets/b768d712-ad3c-4407-9491-33048ea93362)


![WhatsApp Image 2025-01-02 at 1 08 23 AM (2)](https://github.com/user-attachments/assets/06bd16b3-7584-44f0-8175-f10fb71de0cb)

<h1>To run the mobile app:</h1>

1) Install the Expo Go mobile app.
2) Download the zip file of this code and unzip it.
3) Open the Project subfolder in VSCode.
4) Install the required dependencies using the command : npm install
5) Run the project in the terminal using the command : npm start
6) Open Expo Go on your phone and scan the QR code that appears in the terminal.
