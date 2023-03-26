#!/bin/sh
UUID=${UUID:-'d805e46c-3fd9-4f27-a8d5-a7c6aa1229d1'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
