## Modelo de IA para predecir NEO

### Pasos para ejecutar el servidor en python

1. Activar el entorno virtual en la carpeta ia
```bash
python -m venv env
source env/bin/activate  # En Linux o MacOS
env\Scripts\activate  # En Windows
```

2. Instalar las dependencias
```bash
pip install -r requirements.txt
```

3. dirigirse a la carpeta api y ejecutar el siguiente comando correr el servidor en python:
```bash
uvicorn main:app --reload
```

### Pasos para ejecutar el servidor en NestJS

1. Instalar las dependencias
```bash
yarn install
```

2. Ejecutar el servidor
```bash
yarn start:dev
```

### Pasos para ejecutar el cliente en React
1. Instalar las dependencias
```bash
yarn install
```

2. Ejecutar el cliente
```bash
yarn run dev
```
o
```bash
npm run dev
```