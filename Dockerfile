FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/turfpal-app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]
