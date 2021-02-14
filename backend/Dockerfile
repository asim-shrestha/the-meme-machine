FROM python:3
WORKDIR /app

RUN apt update -y && apt install libgl1-mesa-glx -y
COPY requirements.txt requirements.txt
COPY ./api/meme_maker/impact.ttf /usr/local/share/fonts/impact.ttf

RUN pip install -r requirements.txt

COPY . .



EXPOSE 8000

CMD ["python", "asgi.py"]
