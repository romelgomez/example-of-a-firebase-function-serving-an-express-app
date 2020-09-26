#!/bin/bash

# Set algolia keys
# 
# @example: algolia_keys 11110000 00000111110000
# @description: algolia_keys [app-id] [api-key-private]
# 
# Ref: https://firebase.google.com/docs/functions/config-env
# 
firebase functions:config:set algolia.appid="$1" algolia.apikey="$2"
