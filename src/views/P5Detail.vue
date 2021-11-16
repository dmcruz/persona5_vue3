<template>
<div>
  <a-row type="flex" justify="center">
    <a-col :span="1">

      <a-button type="primary" v-on:click="onClickPrevious" class="hide">
        <a-icon type="left" />Previous
      </a-button>

    </a-col>
    <a-col :span="6">

      <h2>{{name}}</h2>

    </a-col>
    <a-col :span="1">
      <a-button type="primary" v-on:click="onClickNext" class="hide">
        Next<a-icon type="right" />
      </a-button>
    </a-col>
  </a-row>

  <div style="width: 35%; margin: auto; text-align: justify; white-space: pre-line;">
    <i>
      {{ getHistory()}}
    </i>

    <br /><br />
    Origins:
    <ul>
      <li v-for="(item) in items" :key="item">{{ item }}</li>
    </ul>
  </div>

  <br /><br />

  <a-row type="flex" justify="center">
    <a-col :span="2" class="header">
      starting level
    </a-col>
    <a-col :span="6">
      {{persona.level}}
    </a-col>
  </a-row>
  <a-row type="flex" justify="center">
    <a-col :span="2" class="header">
      arcana
    </a-col>
    <a-col :span="6">
      {{persona.arcana}}
    </a-col>
  </a-row>
  <a-row type="flex" justify="center">
    <a-col :span="2" class="header">
      trait
    </a-col>
    <a-col :span="6">
      {{persona.trait}}
    </a-col>
  </a-row>
  <a-row type="flex" justify="center">
    <a-col :span="2" class="header">
      inherits
    </a-col>
    <a-col :span="6">
      <div :class="getAffinityIcon(persona.inherits)" style="width: 100%"></div>
    </a-col>
  </a-row>
  <a-row type="flex" justify="center">
    <a-col :span="2" class="header">
      item
    </a-col>
    <a-col :span="6">
      {{persona.item}}
    </a-col>
  </a-row>
  <a-row type="flex" justify="center">
    <a-col :span="2" class="header">
      rare item
    </a-col>
    <a-col :span="6">
      {{persona.rareItem}}
    </a-col>
  </a-row>

  <br />

  <a-row type="flex" justify="center">
    <a-col :span="8" class="header">Skills</a-col>
  </a-row>
  <a-row type="flex" justify="center" v-for="(skill, name) in persona.skills" v-bind:key="name">
    <a-col :span="6" class="header-sub">
        {{name}}
    </a-col>
    <a-col :span="2">
      {{skill}}
    </a-col>
  </a-row>

  <br />

  <a-row type="flex" justify="center">
    <a-col :span="8" class="header">Base Stats</a-col>
  </a-row>
  <a-row type="flex" justify="center" v-for="(stat, index) in persona.stats"
    v-bind:key="statAttributes[index]">
    <a-col :span="6" class="header-sub">
        {{statAttributes[index]}}
    </a-col>
    <a-col :span="2">
      {{stat}}
    </a-col>
  </a-row>

  <br />

  <a-row type="flex" justify="center">
    <a-col :span="8" class="header">Elemental Resistance</a-col>
  </a-row>
  <a-row type="flex" justify="center" v-for="(elem, index) in persona.elems"
    v-bind:key="elemAttributes[index].text">
    <a-col :span="6" class="header-sub">
        {{elemAttributes[index].text}}
    </a-col>
    <a-col :span="2">
      {{getResistDetail(elem)}}
    </a-col>
  </a-row>

</div>
</template>

<script>
import myths from '../data/Mythology';
import { getPersonaLore } from '../utils/TransformUtils';

export default {
  props: ['name'],
  data: () => ({
    myths,
    persona: null,
    lore: null,
    statAttributes: ['Strength', 'Magic', 'Endurance', 'Agility', 'Luck'],
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
    items: [],
  }),
  beforeMount() {
    this.persona = this.getPersonaDetails();
    this.lore = this.getLore();
    this.items.push(...this.getOrigins());
  },
  methods: {
    getLore() {
      if (this.name) {
        const lore = getPersonaLore(myths, this.name);
        if (lore && lore[0]) {
          return lore[0];
        }
      }
      return null;
    },
    getHistory() {
      if (this.lore && this.lore.history) {
        return this.lore.history;
      }
      return 'The historian is working on it...';
    },
    getOrigins() {
      if (this.lore && this.lore.origins) {
        return this.lore.origins;
      }
      return [];
    },
    getAffinityIcon(affinity) {
      return `ico-elem ico-elem-${affinity}`;
    },
    getPersonaDetails() {
      return this.$store.state.selectedPersona;
    },
    getResistDetail(resist) {
      switch (resist) {
        case 'rp':
          return 'Repel';
        case 'nu':
          return 'Nullify';
        case 'ab':
          return 'Absorb';
        case 'wk':
          return 'Weak';
        case 'rs':
          return 'Resist';
        default:
          return resist;
      }
    },
    onClickPrevious() {

    },
    onClickNext() {

    },
  },
};
</script>
<style scoped src="./P5List.css">
</style>
<style scoped>
h2 {
  color: #fff;
  text-transform: uppercase;
}
.header-sub {
  background-color: #333;
  margin: 0.5px;
}
.hide {
  visibility: hidden;
}
</style>
