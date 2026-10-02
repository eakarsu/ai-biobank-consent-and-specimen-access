# Biobank Consent and Specimen Access

Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals.

## Implemented records

- **Biobank Collection**: name, collection Code, institution, custodian, protocol Number, review At, status.
- **Research Donor**: name, participant Code, consent At, restrictions, withdrawal At, status.
- **Consent Version**: title, version, effective At, permitted Uses, prohibited Uses, source Reference, status.
- **Specimen**: name, specimen Code, specimen Type, collected At, volume Ul, status.
- **Freezer Location**: name, freezer, rack, box, slot, capacity, status.
- **Specimen Placement**: title, placed At, quantity, status.
- **Access Request**: title, requester, institution, purpose, requested At, protocol Reference, status.
- **Specimen Access**: title, quantity, use Description, review Notes, status.
- **Material Agreement**: title, version, terms, expires At, signature Evidence, status.
- **Operational Task**: title, owner, priority, start At, due At, done, notes, status.
- **Rule Version**: title, jurisdiction, version, effective At, expires At, source Url, requirement Text, status.
- **Document Requirement**: title, category, required By, source Reference, evidence Reference, review Notes, status.

## AI workflows

- Consent restriction extraction: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Research purpose comparison: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Access packet completeness: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Storage discrepancy summary: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Withdrawal impact draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Material transfer agreement brief: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Evidence completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Operations handoff draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.

## Calculations

- Consent use comparison: Perform exact normalized tag comparison and surface prohibited or unmatched uses for committee review, never automatic permission.
- Biobank Collection evidence checklist: Check source presence against an explicitly supplied document list; reviewer assesses adequacy.
- Operational deadline queue: Compute overdue items from entered dates and completed flags; no external notifications.

## Workspace features

Role-based login and account management; validated create/edit/delete; required parent and sibling relationships; search and pagination; atomic JSON imports; CSV/JSON exports; optimistic concurrency; two independent human reviews; immutable source-text uploads with independent review; dated task calendar; aggregate reports; searchable audit trail; model catalog and administrator AI settings; configured HTTPS connectors with approval, idempotency and receipt checks.

## Integration boundaries

A finite working scope, not every conceivable feature. No production regulator, insurer, carrier, court, university or clinical integration is preconfigured. Source uploads support text/CSV/JSON/Markdown, not OCR/PDF parsing. AI produces drafts and cannot authorize clinical handling, adjudicate rights, select recipients or jurors, establish eligibility, certify regulatory compliance or send submissions. Live external execution requires a configured adapter and independent human approval of the current record. Calculations use supplied rules and units; example rules are fictional.
