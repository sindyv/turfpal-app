FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# Commands for building and pushing to docker hub:
# docker build --platform linux/arm/v7 -t sindredyvik/turfpal-ui:<version> .
# docker push sindredyvik/turfpal-ui:<version>

# If you are pushing the next stable release, remember to also build and push without version (or version 'latest')

# docker build --platform linux/arm/v7 -t sindredyvik/turfpal-ui:latest .
# docker push sindredyvik/turfpal-ui:latest


