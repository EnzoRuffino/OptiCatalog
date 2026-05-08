# OptiCatalog — Roadmap produit / IA

Document de référence pour les évolutions discutées (import catalogue flexible, benchmark prix, RAG marché).

## Phase 0 — Fondations LLM (terminée)

- Variables d’environnement : `OPENAI_API_KEY`, `OPENAI_MODEL`, **`OPENAI_BASE_URL`** (optionnel, ex. passerelle type Requesty : `https://router.requesty.ai/v1`).
- Packages `@opticatalog/ai`, worker BullMQ et route API utilisent la même configuration ; sans clé, comportement inchangé (brouillon local).

## Phase 1 — Import CSV flexible (terminée)

- **Mode rapide** : CSV aligné sur le modèle OptiCatalog (`originalTitle` / `originalDescription` / `price`, etc.) — import direct, sans mapping.
- **Mode colonnes libres** : `POST …/uploads/csv/preview` renvoie en-têtes, échantillon et suggestion de mapping ; l’utilisateur valide les colonnes puis importe avec `mapping` JSON en multipart.
- **Modèle téléchargeable** : `GET …/uploads/csv/template` (authentifié, scoped projet).

## Phase 2 — Suggestion de mapping assistée par IA (à faire)

- Petit appel LLM sur les en-têtes + 2–3 lignes d’exemple pour proposer un mapping quand les heuristiques échouent.
- Quotas / facturation à aligner avec la billing existante.

## Phase 3 — Benchmark prix (module séparé)

- URLs concurrentes ou fiches produit ; jobs asynchrones ; crédits ou plan dédié.
- Sortir le scraping HTTP / agrégateurs dans un service isolé (légalité, robustesse HTML).

## Phase 4 — RAG « marché » partagé

- Index de sources agrégées ou licenciées (pas de copie propriétaire sauf droits clairs).
- Retrieval pour conseils de prix / positionnement ; éventuel enrichissement par tenant.

---

**Liens utiles**

- [Requesty — doc OpenAI-compatible](https://docs.requesty.ai/frameworks/openai)
