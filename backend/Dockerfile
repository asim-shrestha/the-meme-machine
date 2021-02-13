FROM python:3
WORKDIR /app

RUN apt update -y && apt install libgl1-mesa-glx -y
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000

CMD ["python", "asgi.py"]
