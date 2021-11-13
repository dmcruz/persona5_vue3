/* eslint-disable no-restricted-syntax */
const getPersonaAsList = (persona5DataRoyal) => {
  const list = [];
  // eslint-disable-next-line no-restricted-syntax
  // eslint-disable-next-line guard-for-in
  for (const name in persona5DataRoyal) {
    // eslint-disable-next-line no-use-before-define
    const detail = getPersonaDetail(persona5DataRoyal, name);
    const persona = {
      name,
      inherits: detail.inherits,
      item: detail.item,
      rareItem: detail.itemr,
      level: detail.level,
      arcana: detail.arcana,
      trait: detail.trait,
      stats: detail.stats,
      skills: detail.skills,
      elems: detail.elems,
    };
    list.push(persona);
  }
  list.sort((a, b) => a.level - b.level);
  return list;
};
const getPersonaDetail = (data, name) => data[name];

const getPersonaLore = (myths, persona) => myths.filter((myth) => myth.name === persona);
export { getPersonaAsList, getPersonaDetail, getPersonaLore };
