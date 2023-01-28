#!/bin/bash -eu

# If we are running rails server, prepare the database first...
if [ "$1" == "foreman" ] || ([ "$1" == "rails" ] && [ "$2" == "server" ])
then
    echo "RUNNING db:prepare!"
    rails db:prepare
fi

# Then, run whatever we were asked to run
exec "$@" 