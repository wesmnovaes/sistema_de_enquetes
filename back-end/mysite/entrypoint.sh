#!/bin/sh

python manage.py migrate --no-input
python manage.py collectstatic --no-input

gunicorn mysite.wsgi:application --bind 172.18.0.4:8000

