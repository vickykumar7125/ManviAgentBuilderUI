# Google Sign-In with Firebase (Web)

Configured per [Firebase: Authenticate with Google (JavaScript)](https://firebase.google.com/docs/auth/web/google-signin).

## 1. Firebase Console

1. **Enable Google sign-in**
   - [Firebase Console](https://console.firebase.google.com/) → your project (**ai-bot-21856**)
   - **Authentication** → **Sign-in method** → **Google** → **Enable** → **Save**

2. **Authorized domains**
   - **Authentication** → **Settings** → **Authorized domains**
   - Ensure **localhost** is listed (for dev). Add your production domain when you deploy.

3. **Web app config** (for `.env.local`)
   - **Project settings** (gear) → **General** → **Your apps** → select your **Web** app
   - Copy into `.env.local`:
     - `apiKey` → `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `messagingSenderId` → `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
     - `appId` → `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `authDomain`, `projectId`, `storageBucket` can be derived (already set for ai-bot-21856).

## 2. App behavior

- **Sign-in flow:** `signInWithPopup(auth, new GoogleAuthProvider())` as in the Firebase doc.
- **Language:** `auth.useDeviceLanguage()` so the Google OAuth screen follows the user’s browser language.
- **Errors:** Handled for `auth/account-exists-with-different-credential`, `auth/popup-blocked`, and `auth/popup-closed-by-user`.

## 3. Custom domain (optional)

If you use a custom domain for hosting, add it under **Authorized domains** and set `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` to that domain so the redirect uses it instead of `*.firebaseapp.com`.
