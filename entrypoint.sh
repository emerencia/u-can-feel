#!/bin/sh

# Occassionally this is also needed, so just do to be sure.
rm -rf public
rm -rf .cache

yarn
exec "$@"
