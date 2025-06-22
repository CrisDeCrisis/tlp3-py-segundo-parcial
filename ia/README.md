## Modelo de IA para predecir NEO

### Pasos para ejecutar el programa

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

3. Ingresar al archivo main.ipynb y ejecutar cada una de las celdas.

4. dirigirse a la carpeta api y ejecutar el siguiente comando correr el servidor en python:
```bash
uvicorn main:app --reload
```