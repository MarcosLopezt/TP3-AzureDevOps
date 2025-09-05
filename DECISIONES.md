1. Metodología ágil elegida y justificación

Elegí el proceso Agile en Azure DevOps (no Scrum ni Basic) porque:

Usa los tipos de Work Item que pide el TP: Epic → User Story → Task, además de Bug.

Permite Sprints, Boards y Queries sin fricción.

Es un estándar simple para equipos pequeños/medianos y para fines didácticos.

2. Estructura de trabajo (Boards) y por qué

Jerarquía:

Epic: gran funcionalidad transversal.

User Story (US): incremento de valor para el usuario derivado del Epic.

Task: trabajo técnico para completar la US.

Bug: defectos detectados durante desarrollo/pruebas.

Sprint: 2 semanas. Justificación: ciclos cortos facilitan feedback, priorización continua y visibilidad de progreso.

3. Control de versiones (Repos) y políticas de calidad

Repositorio en Azure Repos como fuente de verdad (necesario para Branch Policies).

Rama principal: main (protegida).

Ramas de feature: feature/<slug>.

Branch Policies en main:

Requerir Pull Request.

Mínimo 1 reviewer (no autor).

Resolver comentarios obligatoriamente.

Asociar Work Items al PR.

Build Validation: pipeline CI debe pasar.

Squash merge para mantener historial limpio.

Por qué: asegura calidad antes del merge, trazabilidad con work items y una historia de commits limpia.

4. Pipeline CI (Azure Pipelines)

CI con azure-pipelines.yml.

Corre en cada PR a main y en pushes.

Pasos: checkout → setup Node → npm ci → npm test --if-present → publicar artefacto (opcional).

Por qué: validación automática evita introducir cambios rotos y documenta un historial de builds exitosos.

5. Elección de la aplicación y tecnología

Aplicación Node.js + Express (simple de levantar, portable y suficiente para el objetivo del TP). Endpoints básicos (/, /health) y pruebas mínimas si se agregan.

6. Estructura y justificación del Dockerfile (si aplica al repo)

Base node:alpine (ligera, LTS).

npm ci/npm install en build.

CMD ["npm","start"] para proceso principal.

Beneficio: imágenes pequeñas, reproducibles y rápidas de transferir.

7. Estrategia de versionado y publicación (código)

Versionado SemVer simple para tags de release: v1.0.0, v1.1.0, etc.

Política: merge a main solo vía PR con build verde.

8. Evidencia de funcionamiento (qué mostrar)

Boards: Epic, US, Tasks y Bugs distribuidos en un Sprint de 2 semanas.

PRs: al menos 2 PRs mergeados a main con review y build validation OK.

Builds: historial en Pipelines con status Succeeded.

Branch Policies: captura de la configuración aplicada en main.

9. Problemas encontrados y soluciones

Accesos/Permisos: uso de cuenta institucional; verificación de permisos en Proyecto y Repos.

Builds rojos: se corrigieron scripts y dependencias (ej.: npm ci vs npm install).

Conflictos en PR: rebase/squash previo al merge y coordinación de ramas feature.
