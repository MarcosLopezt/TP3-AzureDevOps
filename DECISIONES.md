1. Metodología ágil elegida y justificación

Elegí el proceso Agile en Azure DevOps (no Scrum ni Basic) porque:
-Usa los tipos de Work Item que pide el TP: Epic → User Story → Task, además de Bug.
-Permite Sprints, Boards y Queries sin fricción.
-Es un estándar simple para equipos pequeños/medianos y para fines didácticos.

2. Estructura de trabajo (Boards) y por qué

Jerarquía:
-Epic: gran funcionalidad transversal.
-User Story (US): incremento de valor para el usuario derivado del Epic.
-Task: trabajo técnico para completar la US.
-Bug: defectos detectados durante desarrollo/pruebas.
-Sprint: 2 semanas. Justificación: ciclos cortos facilitan feedback, priorización continua y visibilidad de progreso.

3. Control de versiones (Repos) y políticas de calidad

Repositorio en Azure Repos

Rama principal: main (protegida).

Ramas de feature:
-feature/login-ui
-feature/recover-password

Branch Policies en main:

Requerir Pull Request.

Mínimo 1 reviewer, autor habilitado.

Resolver comentarios obligatoriamente.

Asociar Work Items al PR.

Build Validation: pipeline CI debe pasar.

4. Problemas encontrados y soluciones

-No author review pull request.
