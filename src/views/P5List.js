import persona5DataRoyal from '../data/PersonaDataRoyal';
import router from '../router/index';
import store from '../store/index';
import { getPersonaAsList } from '../utils/TransformUtils';

export default {
  data: () => ({
    sortOrder: 'asc',
    filterText: '',
    currentPage: 1,
    pageSize: 50,
    totalRecords: 0,
    staticList: getPersonaAsList(persona5DataRoyal),
    list: [],
    headerAttributes: ['lvl', 'persona', 'arcana', 'inherits', 'stats', 'elems'],
    personaAttributes: ['level', 'persona', 'inherits', 'item', 'rare item',
      'arcana', 'trait', 'elems', 'stats', 'skills'],
    statAttributes: ['ST', 'MA', 'EN', 'AG', 'LU'],
    elemAttributes: [{ text: 'Physical', icon: 'ico-elem-mini ico-elem-phys' },
      { text: 'Gun', icon: 'ico-elem-mini ico-elem-gun' },
      { text: 'Fire', icon: 'ico-elem-mini ico-elem-fire' },
      { text: 'Ice', icon: 'ico-elem-mini ico-elem-ice' },
      { text: 'Electric', icon: 'ico-elem-mini ico-elem-elec' },
      { text: 'Wind', icon: 'ico-elem-mini ico-elem-wind' },
      { text: 'Psycokinesis', icon: 'ico-elem-mini ico-elem-psy' },
      { text: 'Nuclear', icon: 'ico-elem-mini ico-elem-nuke' },
      { text: 'Bless', icon: 'ico-elem-mini ico-elem-bless' },
      { text: 'Curse', icon: 'ico-elem-mini ico-elem-curse' }],
  }),
  mounted() {
    this.list = this.staticList;
    this.totalRecords = this.staticList.length;
    this.paginate(this.list);
  },
  methods: {
    getAffinityIcon(affinity) {
      return `ico-elem ico-elem-${affinity}`;
    },
    getResistCss(elem) {
      return `resist resist-${elem}`;
    },
    handleFilterChange(e) {
      this.filterText = e.target.value;
    },
    onShowSizeChange(current, pageSize) {
      this.currentPage = current;
      this.pageSize = pageSize;
      this.paginate(this.list);
    },
    onPageChange(page, pageSize) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.paginate(this.list);
    },
    paginate(array) {
      return array.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    },
    sortList(fieldName) {
      this.list.sort((a, b) => {
        let item1; let
          item2;
        if (this.sortOrder === 'asc') {
          item1 = a[fieldName];
          item2 = b[fieldName];
        } else {
          item1 = b[fieldName];
          item2 = a[fieldName];
        }
        if (item1 < item2) {
          return -1;
        } if (item1 > item2) {
          return 1;
        }
        return 0;
      });
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    sortListByElem(elemIndex) {
      this.list.sort((a, b) => {
        let item1;
        let item2;
        if (this.sortOrder === 'asc') {
          item1 = a.elems[elemIndex];
          item2 = b.elems[elemIndex];
        } else {
          item1 = b.elems[elemIndex];
          item2 = a.elems[elemIndex];
        }
        if (item1 < item2) {
          return -1;
        } if (item1 > item2) {
          return 1;
        }
        return 0;
      });
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    sortListByStat(elemIndex) {
      this.list.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a.stats[elemIndex] - b.stats[elemIndex];
        }
        return b.stats[elemIndex] - a.stats[elemIndex];
      });
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    filter(text) {
      this.currentPage = 1;
      const filteredResult = this.filterByFields(text.toLowerCase());
      this.list = filteredResult;
      this.totalRecords = filteredResult.length;
    },
    filterByFields(text) {
      return this.list.filter((item) => item.name.toLowerCase().indexOf(text) > -1
          || item.arcana.toLowerCase().indexOf(text) > -1
          || item.trait.toLowerCase().indexOf(text) > -1
          || item.inherits.toLowerCase().indexOf(text) > -1);
    },
    onSearch() {
      this.list = this.staticList;
      this.filter(this.filterText);
    },
    onClear() {
      this.filterText = '';
      this.list = this.staticList;
      this.currentPage = 1;
      this.totalRecords = this.list.length;
    },
    goToPersona(persona) {
      store.dispatch('selectPersona', persona);
      router.push({ path: `/persona/${persona.name}` });
    },
  },
};
