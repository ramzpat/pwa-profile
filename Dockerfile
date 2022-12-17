# Stage 1
FROM node:17-alpine as builder
WORKDIR /react-app
COPY package*.json .
# COPY yarn.lock .
RUN npm install
COPY . .
RUN npm run build

# Stage 2 
FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
WORKDIR /etc/nginx/html/
RUN rm -rf ./* 
COPY --from=builder /react-app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
