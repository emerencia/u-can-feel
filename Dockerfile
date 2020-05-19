FROM node:12-buster
RUN yarn global add gatsby-cli

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json *yarn* ./
RUN yarn
RUN gatsby build

COPY entrypoint.sh ./
# RUN chmod +x /entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
