FROM node
RUN npm install -g serve
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080
CMD ["serve", "-l", "8080", "-s", "dist"]