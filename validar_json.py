import json
import sys

def validar_apps():
    campos_obligatorios = [
        "nombreapp", "descripcion", "icono", "grupo", 
        "fecha", "id", "integrantes", "actividad", "url"
    ]
    
    try:
        with open('apps.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        if not isinstance(data, list):
            print("Error: El archivo debe ser una lista de objetos [].")
            sys.exit(1)
            
        for i, item in enumerate(data):
            for campo in campos_obligatorios:
                if campo not in item or not str(item[campo]).strip():
                    print(f"Error en el objeto {i+1}: Falta el campo '{campo}' o está vacío.")
                    sys.exit(1)
            
            if not isinstance(item['integrantes'], list):
                print(f"Error en el objeto {i+1}: 'integrantes' debe ser una lista.")
                sys.exit(1)
                
        print("¡Todo perfecto! El archivo es válido.")
        
    except json.JSONDecodeError as e:
        print(f"Error de sintaxis en el JSON: {e}")
        sys.exit(1)
    except FileNotFoundError:
        print("Error: No se encontró el archivo apps.json.")
        sys.exit(1)

if __name__ == "__main__":
    validar_apps()
