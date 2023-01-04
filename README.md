# Google Clone with Custom Search and OAuth 2
## With Next.js and tailwindcss

- View Live Demo [google-next-alexpaden.vercel.app/](https://google-next-alexpaden.vercel.app/).
- Tutorial on NVM for mac (node version manager) [install-nvm-macos-with-homebrew/](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- The URL location to retrieve necessary API keys are saved in the .env.example file [=.env.example](https://github.com/alexpaden/google-next/blob/main/Google/.env.example)


# Getting Started

First, run the development server:

Clone the repository from
[https://github.com/alexpaden/google-next.git](https://github.com/alexpaden/google-next)


## Run local dev environment 
```bash
cd Google
cp .env.example .env

+ add google oauth URIs localhost:3000
+ add google oauth redirect URIs localhost:3000/api/auth/callback/google

yarn install
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run from Dockerfile
```bash
cd Google
cp .env.example .env (or via cloud host)

+ add google oauth URIs localhost:3000
+ add google oauth redirect URIs localhost:3000/api/auth/callback/google

docker build -t google-next .
docker run -p 3000:3000 google-next
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on [https://vercel.com/](https://vercel.com/)
```bash
clone repository
deploy to vercel
add api keys
add oauth "custom".vercel.app URIs
add oauth "custom".vercel.app redirect URIs 
"custom".vercel.app/api/auth/callback/google
```

Open the vercel.app url with your browser to see the result. [https://google-next-alexpaden.vercel.app/](https://google-next-alexpaden.vercel.app/).

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [CONTEXT_KEY=](https://cse.google.com/cse/create/new)
- [API_KEY=](https://developers.google.com/custom-search/v1/introduction)
- [GOOGLE_CLIENT_ID=](https://developers.google.com/identity/protocols/oauth2)
- [GOOGLE_CLIENT_SECRET=](https://developers.google.com/identity/protocols/oauth2)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
