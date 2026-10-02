export interface PageConfig {
  label: string;
  href: string;
  description: string;
  entities: string[];
  workflows: string[];
}

export interface EntityConfig {
  name: string;
  label: string;
  fields: Array<{ name: string; kind: "string" | "number" | "boolean" | "date" }>;
}

export interface WorkflowConfig {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  fields: string[];
}

export const appConfig = {
  "slug": "ai-biobank-consent-and-specimen-access",
  "title": "Biobank Consent and Specimen Access",
  "tagline": "Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals.",
  "accent": "rose"
};
export const pages: PageConfig[] = [
  {
    "label": "Intake & registers",
    "href": "/registers",
    "description": "Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals.",
    "entities": [
      "BiobankCollection",
      "ResearchDonor",
      "ConsentVersion"
    ],
    "workflows": [
      "consent-restriction-extraction",
      "research-purpose-comparison"
    ]
  },
  {
    "label": "Operational records",
    "href": "/workflow",
    "description": "Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals.",
    "entities": [
      "Specimen",
      "FreezerLocation",
      "SpecimenPlacement"
    ],
    "workflows": [
      "access-packet-completeness",
      "storage-discrepancy-summary"
    ]
  },
  {
    "label": "Review & delivery",
    "href": "/delivery",
    "description": "Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals.",
    "entities": [
      "AccessRequest",
      "SpecimenAccess",
      "MaterialAgreement"
    ],
    "workflows": [
      "withdrawal-impact-draft",
      "material-transfer-agreement-brief"
    ]
  },
  {
    "label": "Tasks & requirements",
    "href": "/operations",
    "description": "Assignments, versioned rules and document requirements.",
    "entities": [
      "OperationalTask",
      "RuleVersion",
      "DocumentRequirement"
    ],
    "workflows": [
      "evidence-completeness-review",
      "operations-handoff-draft"
    ]
  }
];
export const entities: Record<string, EntityConfig> = {
  "BiobankCollection": {
    "name": "BiobankCollection",
    "label": "Biobank Collection",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "collectionCode",
        "kind": "string"
      },
      {
        "name": "institution",
        "kind": "string"
      },
      {
        "name": "custodian",
        "kind": "string"
      },
      {
        "name": "protocolNumber",
        "kind": "string"
      },
      {
        "name": "reviewAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      }
    ]
  },
  "ResearchDonor": {
    "name": "ResearchDonor",
    "label": "Research Donor",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "participantCode",
        "kind": "string"
      },
      {
        "name": "consentAt",
        "kind": "date"
      },
      {
        "name": "restrictions",
        "kind": "string"
      },
      {
        "name": "withdrawalAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "ConsentVersion": {
    "name": "ConsentVersion",
    "label": "Consent Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "permittedUses",
        "kind": "string"
      },
      {
        "name": "prohibitedUses",
        "kind": "string"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "Specimen": {
    "name": "Specimen",
    "label": "Specimen",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "researchDonorId",
        "kind": "string"
      },
      {
        "name": "specimenCode",
        "kind": "string"
      },
      {
        "name": "specimenType",
        "kind": "string"
      },
      {
        "name": "collectedAt",
        "kind": "date"
      },
      {
        "name": "volumeUl",
        "kind": "number"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "FreezerLocation": {
    "name": "FreezerLocation",
    "label": "Freezer Location",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "freezer",
        "kind": "string"
      },
      {
        "name": "rack",
        "kind": "string"
      },
      {
        "name": "box",
        "kind": "string"
      },
      {
        "name": "slot",
        "kind": "string"
      },
      {
        "name": "capacity",
        "kind": "number"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "SpecimenPlacement": {
    "name": "SpecimenPlacement",
    "label": "Specimen Placement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "specimenId",
        "kind": "string"
      },
      {
        "name": "freezerLocationId",
        "kind": "string"
      },
      {
        "name": "placedAt",
        "kind": "date"
      },
      {
        "name": "quantity",
        "kind": "number"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "AccessRequest": {
    "name": "AccessRequest",
    "label": "Access Request",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "requester",
        "kind": "string"
      },
      {
        "name": "institution",
        "kind": "string"
      },
      {
        "name": "purpose",
        "kind": "string"
      },
      {
        "name": "requestedAt",
        "kind": "date"
      },
      {
        "name": "protocolReference",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "SpecimenAccess": {
    "name": "SpecimenAccess",
    "label": "Specimen Access",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "accessRequestId",
        "kind": "string"
      },
      {
        "name": "specimenId",
        "kind": "string"
      },
      {
        "name": "quantity",
        "kind": "number"
      },
      {
        "name": "useDescription",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "MaterialAgreement": {
    "name": "MaterialAgreement",
    "label": "Material Agreement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "accessRequestId",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "terms",
        "kind": "string"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "signatureEvidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "OperationalTask": {
    "name": "OperationalTask",
    "label": "Operational Task",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "done",
        "kind": "boolean"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "RuleVersion": {
    "name": "RuleVersion",
    "label": "Rule Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "jurisdiction",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceUrl",
        "kind": "string"
      },
      {
        "name": "requirementText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  },
  "DocumentRequirement": {
    "name": "DocumentRequirement",
    "label": "Document Requirement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "requiredBy",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "evidenceReference",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "biobankCollectionId",
        "kind": "string"
      }
    ]
  }
};
export const workflows: WorkflowConfig[] = [
  {
    "slug": "consent-restriction-extraction",
    "title": "Consent restriction extraction",
    "description": "Consent restriction extraction using selected biobank collection records and supplied evidence.",
    "prompt": "Consent restriction extraction for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "research-purpose-comparison",
    "title": "Research purpose comparison",
    "description": "Research purpose comparison using selected biobank collection records and supplied evidence.",
    "prompt": "Research purpose comparison for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "access-packet-completeness",
    "title": "Access packet completeness",
    "description": "Access packet completeness using selected biobank collection records and supplied evidence.",
    "prompt": "Access packet completeness for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "storage-discrepancy-summary",
    "title": "Storage discrepancy summary",
    "description": "Storage discrepancy summary using selected biobank collection records and supplied evidence.",
    "prompt": "Storage discrepancy summary for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "withdrawal-impact-draft",
    "title": "Withdrawal impact draft",
    "description": "Withdrawal impact draft using selected biobank collection records and supplied evidence.",
    "prompt": "Withdrawal impact draft for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "material-transfer-agreement-brief",
    "title": "Material transfer agreement brief",
    "description": "Material transfer agreement brief using selected biobank collection records and supplied evidence.",
    "prompt": "Material transfer agreement brief for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "evidence-completeness-review",
    "title": "Evidence completeness review",
    "description": "Evidence completeness review using selected biobank collection records and supplied evidence.",
    "prompt": "Evidence completeness review for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "operations-handoff-draft",
    "title": "Operations handoff draft",
    "description": "Operations handoff draft using selected biobank collection records and supplied evidence.",
    "prompt": "Operations handoff draft for Biobank Consent and Specimen Access. Operational scope: Track specimen consent restrictions, freezer locations, access requests, material-transfer agreements and withdrawals. Specific AI scope: Map consent language to proposed research uses for committee review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  }
];
export function findPage(href:string){return pages.find(p=>p.href===href);}
