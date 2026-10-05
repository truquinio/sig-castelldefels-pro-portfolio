<div align="center">

# 🏙️ SIG Castelldefels · Urban Digital Twin

### Public Portfolio Edition · GIS 2D/3D · parcelario · planeamiento · ciudad en vivo

Showcase público de un prototipo privado orientado a análisis territorial, trazabilidad urbanística y visualización urbana.

![MapLibre](https://img.shields.io/badge/MapLibre-396CB2?style=flat-square)
![Cesium](https://img.shields.io/badge/Cesium-3D-6CADDF?style=flat-square)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=flat-square)
![PostGIS](https://img.shields.io/badge/PostGIS-Spatial-4169E1?style=flat-square)
[![Pages](https://github.com/truquinio/sig-castelldefels-pro-portfolio/actions/workflows/pages.yml/badge.svg)](https://github.com/truquinio/sig-castelldefels-pro-portfolio/actions/workflows/pages.yml)

[**Abrir SIG en Render**](https://sig-castelldefels-twin.onrender.com/) ·
[**Arquitectura**](docs/ARCHITECTURE.md) ·
[**Alcance público**](SHOWCASE_SCOPE.md)

</div>

---

> [!IMPORTANT]
> Este repositorio es una **edición pública de portfolio**. Explica el producto, su arquitectura y su experiencia visual sin publicar el núcleo privado, reglas internas, automatizaciones ni datasets de trabajo. No es un sistema oficial del Ayuntamiento de Castelldefels ni una fuente normativa.

## 🎯 Qué resuelve el proyecto

El proyecto explora una plataforma municipal 2D/3D donde una parcela, su planeamiento y su contexto territorial puedan consultarse con procedencia explícita.

El flujo de trabajo del desarrollo privado se organiza alrededor de:

> **localizar → consultar → contrastar fuentes → analizar → simular → explicar evidencia**

La página pública dirige al SIG desplegado en Render. Este repositorio sólo documenta su alcance y arquitectura; el núcleo de código permanece privado.

## 🧭 Tres superficies del producto

| Superficie | Objetivo |
| --- | --- |
| **Territorio** | Consulta rápida de capas, Catastro, planeamiento, riesgos y contexto abierto |
| **Urbanismo 3D** | Parcela, volumetría y escenarios con procedencia y supuestos visibles |
| **Ciudad en vivo / God's Eye** | Contexto operativo 3D para fuentes temporales y simulaciones claramente etiquetadas |

## ✨ Capacidades del desarrollo privado

- API **FastAPI** con contratos para salud, parcelas, planeamiento, edificabilidad y escenarios;
- **PostgreSQL/PostGIS** para geometría, metadatos y reglas versionadas;
- **MapLibre GL JS** para interacción territorial y urbana rápida;
- **CesiumJS** para la escena 3D profunda;
- Catastro INSPIRE, ICGC y MUC como fuentes oficiales o de referencia según el caso;
- OpenStreetMap y Overture como contexto abierto;
- Overture Buildings/PMTiles para contexto construido escalable;
- capas de riesgo ACA y fuentes operativas como ADS-B, AMB GTFS-Realtime, SCT, ICAEN y redes ambientales cuando están disponibles;
- PWA, fallback offline del shell y separación entre datos actuales, derivados, estimados, escenarios y simulaciones;
- herramientas deterministas de análisis que pueden ser orquestadas por un modelo sin convertir al modelo en fuente de normativa ni geometría.

> [!NOTE]
> La disponibilidad de una fuente externa no implica que todos sus datos sean “live”. El proyecto distingue observación, estimación, escenario y simulación en lugar de presentarlos como equivalentes.

## ▶️ Abrir el SIG

[**SIG Castelldefels · Digital Twin en Render**](https://sig-castelldefels-twin.onrender.com/)

La portada de GitHub Pages redirige allí. La interfaz y los servicios pueden tardar en responder durante el arranque del plan gratuito; la propia aplicación muestra su estado. Este repositorio conserva la documentación pública sin replicar el código privado.

## 🏗️ Arquitectura

~~~mermaid
flowchart LR
    O["Fuentes oficiales / abiertas"] --> A["Adaptadores y normalización"]
    A --> API["FastAPI"]
    API --> DB[("PostgreSQL / PostGIS")]
    API --> M["MapLibre · Territorio"]
    API --> C["Cesium · 3D / God's Eye"]
    M --> UX["Consulta y evidencia"]
    C --> UX
    S["Escenarios"] --> API
~~~

La arquitectura pública documenta las capas y responsabilidades; la implementación completa permanece privada.

📘 [Ver arquitectura pública](docs/ARCHITECTURE.md)

## 🔎 Procedencia y semántica

El proyecto evita mezclar categorías de evidencia:

- **official** — fuente oficial;
- **open** — fuente abierta;
- **derived / estimate** — cálculo o inferencia;
- **scenario** — hipótesis introducida o calculada para comparar alternativas;
- **synthetic / simulation** — representación generada para visualización o prueba;
- **unknown** — evidencia insuficiente.

Una visualización 3D o un escenario **no sustituyen** una licencia, un certificado, Catastro ni una determinación urbanística oficial.

## 📦 Público vs. privado

| Edición pública | Desarrollo privado |
| --- | --- |
| portal público a Render | API FastAPI |
| documentación de alcance | PostGIS y contratos de datos |
| arquitectura de alto nivel | análisis parcelario |
| documentación de procedencia | reglas versionadas y escenarios |
| experiencia visual | MapLibre + Cesium |
| sin datos internos | integraciones y tooling de ingesta |

## 🧩 Stack

**GIS / 3D:** MapLibre GL JS · CesiumJS · GeoJSON · PMTiles  
**Backend privado:** Python · FastAPI  
**Datos:** PostgreSQL/PostGIS · OGC/INSPIRE · servicios públicos  
**Frontend público:** HTML · CSS · JavaScript  
**Principios:** provenance-first · mobile/responsive · accesibilidad · PWA

## 📌 Estado

**Portfolio / Showcase Edition.** El desarrollo principal continúa en privado y evoluciona como prototipo técnico, no como sistema municipal oficial.

## 🔏 Uso y reutilización

Este repositorio público funciona como showcase técnico. **No concede actualmente una licencia open source de reutilización del código**.

Las fuentes cartográficas y los datos de terceros mantienen sus propias licencias y condiciones.

---

© 2026 Federico Trucco. All rights reserved.  
**by [truquinio](https://github.com/truquinio)** · [LinkedIn](https://www.linkedin.com/in/federico-trucco/)
