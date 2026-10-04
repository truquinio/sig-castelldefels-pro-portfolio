<div align="center">

# 🏙️ SIG Castelldefels · Digital Twin

### Public Portfolio Edition

Showcase geoespacial 2D orientado a explicar la idea, arquitectura y experiencia visual de un prototipo de gemelo digital urbano.

![MapLibre](https://img.shields.io/badge/MapLibre-396CB2?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square)
![GIS](https://img.shields.io/badge/GIS-geoespacial-4C8C2B?style=flat-square)
[![Pages](https://github.com/truquinio/sig-castelldefels-pro-portfolio/actions/workflows/pages.yml/badge.svg)](https://github.com/truquinio/sig-castelldefels-pro-portfolio/actions/workflows/pages.yml)

[**Demo pública**](https://truquinio.github.io/sig-castelldefels-pro-portfolio/) ·
[**Arquitectura**](docs/ARCHITECTURE.md) ·
[**Alcance**](SHOWCASE_SCOPE.md)

</div>

---

> [!IMPORTANT]
> Este repositorio es una **edición pública de portfolio**. La implementación completa, integraciones avanzadas, automatizaciones, agentes, reglas internas y tooling de datos permanecen en un repositorio privado.

## 🌍 Qué muestra

El proyecto explora cómo combinar cartografía web, datos geoespaciales y análisis urbano en una interfaz única.

La edición pública conserva:

- experiencia cartográfica;
- ejemplo 2D con MapLibre;
- datos ficticios/públicos de demostración;
- arquitectura conceptual;
- descripción de las fuentes y capas trabajadas;
- límites entre showcase y núcleo privado.

## ▶️ Ejecutar el showcase

```bash
python -m http.server 8000
```

Abre `http://localhost:8000/`. El mapa requiere conexión a sus recursos externos; no necesita el backend privado.

## 🧭 Demo pública

La demo del repo está construida específicamente para portfolio. Utiliza un mapa base público y geometrías simples de ejemplo.

No contiene:

- proxy local real;
- lógica normativa;
- consultas completas a Catastro;
- automatizaciones Overture;
- agente geoespacial original;
- integración Ollama;
- motor de análisis privado;
- datasets internos.

## 🧩 Conceptos del proyecto completo

- MapLibre en 2D/3D;
- OpenStreetMap / OpenFreeMap;
- ortofoto ICGC;
- Catastro INSPIRE / OVC;
- planeamiento MUC;
- clustering y normalización de actividades;
- análisis por parcela;
- volumen 3D conceptual;
- exportación estructurada;
- agente geoespacial;
- integración opcional con modelos locales.

## 🏗️ Arquitectura pública

~~~mermaid
flowchart TD
    SRC["Fuentes geoespaciales públicas"] --> N["Normalización"]
    N --> MAP["Visor MapLibre"]
    MAP --> L["Capas / geometrías"]
    MAP --> A["Análisis"]
    A --> UI["Interfaz urbana"]
    CORE["Core privado"] -. implementación completa .-> A
~~~

📘 [Ver arquitectura](docs/ARCHITECTURE.md)

## 🧪 Qué demuestra técnicamente

**Frontend cartográfico:** MapLibre GL JS · HTML · CSS · JavaScript  
**Datos:** GeoJSON · servicios OGC · fuentes geoespaciales públicas  
**Conceptos:** capas, parcelario, planeamiento, análisis espacial, 2D/3D, agentes

## 📦 Portfolio vs. Core

| Público | Privado |
| --- | --- |
| README y documentación | motor completo |
| demo simplificada | integraciones reales |
| arquitectura conceptual | reglas avanzadas |
| datos de ejemplo | tooling de ingesta |
| UI cartográfica | agentes / automatización |
| casos de uso | lógica comercial |

## ⚖️ Alcance

No es un sistema oficial del Ayuntamiento de Castelldefels ni una fuente normativa.

Los datos de la demo son exclusivamente de demostración o proceden de fuentes públicas.

## 📌 Estado

**Portfolio / Showcase Edition.**  
El desarrollo completo continúa de forma privada.

## 🔏 Uso y reutilización

Este repositorio público funciona como showcase técnico. **No concede una licencia open source de reutilización del código**.

Las fuentes cartográficas y los datos de terceros mantienen sus propias licencias y condiciones.

---

© 2026 Federico Trucco. All rights reserved.  
**by [truquinio](https://github.com/truquinio)** · [LinkedIn](https://www.linkedin.com/in/federico-trucco/)
