# Arquitectura pública

Este documento describe la arquitectura conceptual del showcase.

~~~mermaid
flowchart LR
    S["Fuentes públicas"] --> G["GeoJSON / OGC"]
    G --> M["MapLibre"]
    M --> C["Capas"]
    M --> P["Parcelas / geometrías"]
    M --> X["Experiencia de usuario"]
    A["Análisis avanzado privado"] -.-> X
~~~

## Proyecto completo

El desarrollo privado incorpora más fuentes, procesos de normalización, análisis, automatización y agentes.

La edición pública sólo conserva los conceptos necesarios para entender el proyecto y evaluar su dirección técnica.
