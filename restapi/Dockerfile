FROM node:16.13.1
LABEL org.opencontainers.image.source https://github.com/Arquisoft/dede_es6b
COPY . /app
WORKDIR /app
#Install the dependencies
ENV API_KEY=$API_KEY  
ENV API_CERT=$API_CERT 
RUN npm install
CMD [ "npm", "start" ]