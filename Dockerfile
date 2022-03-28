FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
#creating the layers for each image and each layer is cached so that we dont
#have to rebuild it

#we split up the copy of package.json and copy of the working directory for efficiency
#since we edit our source code more often than our package dependencies we split up the
#working directory and packaage.json because they will rarely change but the code base will
#change alot

#so here the only step that really changes is step 5 w. our source code so only change step 5
EXPOSE 3000
CMD ["node", "index.js"]