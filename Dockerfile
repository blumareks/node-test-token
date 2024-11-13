FROM node:18

# Create directory for application
WORKDIR /data/

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]