FROM alpine:latest

# ensure local python is preferred over distribution python
ENV PATH /usr/local/bin:$PATH

# cannot remove LANG even though https://bugs.python.org/issue19846 is fixed
# last attempted removal of LANG broke many users:
# https://github.com/docker-library/python/pull/570
ENV LANG C.UTF-8

# рабочая директория внутри проекта
WORKDIR /usr/src/app

# переменные окружения для python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

#USER root

RUN apk update
RUN apk add python3
RUN apk add py3-pip

# копируем содержимое текущей папки в контейнер
COPY . .
#RUN source /usr/src/app/env/bin/activate
#RUN python3 -m venv /usr/src/venv
#RUN source /usr/src/venv/bin/activate

# устанавливаем зависимости
#RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt --break-system-packages
#EXPOSE 8001
#CMD sudo nohup python3 manage.py runserver 0.0.0.0:8001 &
