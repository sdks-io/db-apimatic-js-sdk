import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Different field types allow different `operator` values:
 * - Field type of **text**:
 *   - **is**: exact match
 *   - **not**: not exact match
 *   - **match**: regular expression, without /. Example:
 *     - OK `[a-zA-Z0-9]`
 *     - Not OK `/[a-zA-Z0-9]/`
 * - Field type of **dropdown**:
 *   - **is**: exact match, single value
 *   - **not**: not exact match, single value
 *   - **any**: exact match, array of values.
 *   - **none**: not exact match, array of values.
 * - Field type of **checkbox**:
 *   - **is**: exact match, single value
 *   - **not**: not exact match, single value
 * - Field type of **radio**:
 *   - **is**: exact match, single value
 *   - **not**: not exact match, single value
 */
export const Operator = {
  Any: "any",
  Is: "is",
  Match: "match",
  None: "none",
  Not: "not",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
