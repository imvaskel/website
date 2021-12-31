FROM node:14-alpine 
 
WORKDIR /usr/src/app 
# the entire project is copied 
COPY / ./ 
RUN npm install 
RUN npm run build 
 
CMD ["node", "__sapper__/build"] 
 
EXPOSE 3000 
 
ENV HOST=0.0.0.0 