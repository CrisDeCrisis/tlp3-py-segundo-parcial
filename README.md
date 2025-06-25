# Modelo de IA para predecir NEO

## Requisitos
- Python 3X
- Jupyter Notebook
- Librerías especificadas en el archivo `requirements.txt`
- Yarn o npm

## Utilizar el repositorio
1. Clonar el repositorio
```bash
git clone https://github.com/CrisDeCrisis/tlp3-py-segundo-parcial
```

2. Navegar a la carpeta del proyecto
```bash
cd tlp3-py-segundo-parcial
```

### Pasos para ejecutar el servidor en Python

1. Navegar a la carpeta `ia`
```bash
cd ia
```

2. Activar el entorno virtual
```bash
python -m venv env
source env/bin/activate  # En Linux o MacOS
env\Scripts\activate  # En Windows
```

3. Instalar las dependencias
```bash
pip install -r requirements.txt
```

4. dirigirse a la carpeta api y ejecutar el siguiente comando correr el servidor en python:
```bash
cd api
uvicorn main:app --reload
```

### Pasos para ejecutar el servidor en NestJS

1. Navegar a la carpeta `server`
```bash
cd server
```

2. Instalar las dependencias
```bash
yarn install
```

3. Ejecutar el servidor
```bash
yarn start:dev
```

### Pasos para ejecutar el cliente en React

1. Navegar a la carpeta `client`
```bash
cd client
```

2. Instalar las dependencias
```bash
yarn install
```

3. Ejecutar el cliente en yarn o npm
```bash
yarn run dev
npm run dev
```