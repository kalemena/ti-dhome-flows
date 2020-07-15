FROM kalemena/node-red:latest

RUN mkdir -p /tmp/node.install \
    && cd /tmp/node.install \
    && npm i \
        node-red-contrib-file-function-ext \
        node-red-contrib-string \
        node-red-contrib-fs \
        node-red-contrib-readdir \
        node-red-contrib-telegrambot \
        node-red-node-darksky \
        node-red-contrib-simple-weekly-scheduler \
        node-red-contrib-flatter \
        node-red-contrib-covid19 \
    && cp -r node_modules /opt/node-red/ \
    && rm -rf node_modules
