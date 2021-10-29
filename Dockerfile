FROM asciidoctor/docker-asciidoctor

RUN apk add --update npm && npm i shiki