/*
 * actions types
 */

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SELECT_COUNTRY = "SELECT_COUNTRY";

/*
 * action creators
 */

export function select_category(category) {
  return { type: SELECT_CATEGORY, category };
}

export function select_country(country) {
  return { type: SELECT_COUNTRY, country };
}
