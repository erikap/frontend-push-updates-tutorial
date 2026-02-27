FROM madnificent/ember:6.8.1
LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm ci
COPY . .
RUN ember build -prod

FROM semtech/static-file-service:0.2.0

COPY --from=builder /app/dist /data
