import json
import sys
import os

def validar_entrega():
    archivo = 'apps.json'
    campos_obligatorios = ["nombreapp", "descripcion", "icono", "grupo", "fecha", "id", "integrantes", "actividad", "url"]

    try:
        # 1. Cargar el archivo modificado (el del estudiante)
        with open(archivo, 'r', encoding='utf-8') as f:
            datos_nuevos = json.load(f)

        # 2. Intentar cargar la versión original (la de tu rama semestre3)
        # GitHub Actions descargará la versión previa en un archivo temporal si lo configuramos
        archivo_original = 'apps_original.json'
        if os.path.exists(archivo_original):
            with open(archivo_original, 'r', encoding='utf-8') as f:
                datos_viejos = json.load(f)
            
            # REGLA DE ORO: No se pueden borrar registros previos
            if len(datos_nuevos) < len(datos_viejos):
                print(f"❌ ERROR: Has borrado contenido. Había {len(datos_viejos)} apps y ahora hay {len(datos_nuevos)}.")
                sys.exit(1)
            
            # Opcional: Verificar que los primeros N elementos coincidan exactamente
            for i in range(len(datos_viejos)):
                if datos_nuevos[i] != datos_viejos[i]:
                    print(f"❌ ERROR: Has modificado una entrega anterior (App #{i+1}). Solo puedes agregar la tuya al final.")
                    sys.exit(1)

        # 3. Validar estructura de los nuevos datos
        for i, item in enumerate(datos_nuevos):
            for campo in campos_obligatorios:
                if campo not in item or not str(item[campo]).strip():
                    print(f"❌ ERROR en objeto {i+1}: Falta el campo '{campo}'.")
                    sys.exit(1)

        print("✅ ¡Validación exitosa! No se borró nada y el formato es correcto.")

    except Exception as e:
        print(f"❌ ERROR CRÍTICO: {e}")
        sys.exit(1)

if __name__ == "__main__":
    validar_entrega()