import { Restriction } from '@/types/restriction';
import { Zone } from '@/types/zone';

export type Scan = {
  id: number;
  imageUri: string;         // local file:// path to the perspective-corrected image
  createdAt: string;        // ISO 8601 timestamp
  zones: Zone[];      // extracted field data per zone (empty until OCR runs)
  restrictions: Restriction[]; // parsed restriction tags from zone data
  notes: string;            // any free-text note the user adds on the review screen
};
 
/**
 * A scan record as it comes back from SQLite (zones/restrictions stored as JSON strings).
 * Used internally by db.ts before deserializing into a full Scan.
 */
export type RawScanRow = {
  id: number;
  imageUri: string;
  createdAt: string;
  zonesJson: string;        // JSON.stringify(Zone[])
  restrictionsJson: string; // JSON.stringify(Restriction[])
  notes: string;
};