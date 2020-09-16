FROM nginx:1.19-alpine
ADD index.html /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY language /usr/share/nginx/html/language

