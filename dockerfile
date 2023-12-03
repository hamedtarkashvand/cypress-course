FROM node:18.17.0-alpine
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR '/app'
COPY --chown=app:app package*.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm" ,"run" , "dev" ]

