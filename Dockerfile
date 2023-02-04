FROM ruby:2.7.7 AS base


RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

FROM base as rails-deps

# Gemfile
COPY Gemfile* ./
RUN bundle install

# FROM rails-deps as rails-base
COPY . .

ENV PORT=3000
# https://docs.docker.com/engine/reference/builder/#environment-replacement
EXPOSE ${PORT:-3000}

RUN chmod +x /usr/src/app/.docker/entry_point.sh
ENTRYPOINT ["/usr/src/app/.docker/entry_point.sh"]

# Webpack JIT compile doesn't work.
RUN RAILS_ENV=production SECRET_KEY_BASE=dummy RAILS_MASTER_KEY=dummy bundle exec rails dartsass:build
RUN RAILS_ENV=production SECRET_KEY_BASE=dummy RAILS_MASTER_KEY=dummy bundle exec rake assets:precompile