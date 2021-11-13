<template>
  <div class="home">
    <a-space>
    <a-input :value="filterText" @change="handleFilterChange" v-on:keyup.enter="onSearch"/>
    <a-button type="primary" v-on:click="onSearch">Filter</a-button>
    <a-button type="secondary" v-on:click="onClear">Clear</a-button>
    </a-space>
    <br /><br />
    <div class="content">
      <a-row class="header-group">
        <a-col :span="9" class="tableBorderRightHead">
          Persona
        </a-col>
        <a-col :span="5" class="tableBorderRightHead">
          Stats
        </a-col>
        <a-col :span="10">
          Resistance
        </a-col>
      </a-row>
      <a-row class="header" type="flex" justify="space-between">
        <a-col :span="1" class="headerleftAlign">
          <a v-on:click="sortList('level')">Lvl</a>
        </a-col>
        <a-col :span="3" class="leftAlign">
          <a v-on:click="sortList('name')">Name</a>
        </a-col>
        <a-col :span="2" class="leftAlign">
          <a v-on:click="sortList('arcana')">Arcana</a>
        </a-col>
        <a-col :span="2" class="leftAlign">
          <a v-on:click="sortList('trait')">Trait</a>
        </a-col>
        <a-col :span="1" class="leftAlign tableBorderRightHead">
          <a v-on:click="sortList('inherits')">Inherits</a>
        </a-col>
        <a-col :span="1" v-for="(attr, index) in statAttributes" :key="'stat-' + attr">
          <a v-on:click="sortListByStat(index)">{{attr}}</a>
        </a-col>
        <a-col :span="1" v-for="(attr, index) in elemAttributes" :key="'elem-' + attr.text"
          :class="index == 0? 'tableBorderLeftHead tooltip' : 'tooltip'">
          <a  v-on:click="sortListByElem(index)">
            <div style="width: 100%" :class="attr.icon">
              <span class="tooltiptext">
                {{attr.text}}
              </span>
            </div>
          </a>
        </a-col>
      </a-row>
      <a-row class="row leftAlign" v-for="(item, index)
        in paginate(list)" :class="index % 2 === 0 ? 'darkRow' : 'alterRow'"
         :key="item.name"
         type="flex"
         justify="space-between">
        <a-col :span="1" class="centerAlign">
          {{ item.level }}
        </a-col>
        <a-col :span="3">
          <router-link :to="'/persona/' + item.name">
            <a v-on:click="goToPersona(item)" class="linkBody">{{ item.name }}</a>
          </router-link>
        </a-col>
        <a-col :span="2">
          {{ item.arcana }}
        </a-col>
        <a-col :span="2">
          {{ item.trait }}
        </a-col>
        <a-col :span="1" class="centerAlign tableBorderRight">
          <div :class="'tooltip ' + getAffinityIcon(item.inherits)" style="width: 100%">
            <span class="tooltiptext">
              {{item.inherits}}
            </span>
          </div>
        </a-col>
        <a-col :span="1" v-for="(stat, index) in item.stats" class="centerAlign" :key="index">
          {{ stat }}
        </a-col>
        <a-col :span="1" v-for="(elem, index)
          in item.elems" :key="index"
          :class="index === 0 ? 'tableBorderLeft ' + getResistCss(elem)
          : getResistCss(elem)">
          {{ elem }}
        </a-col>
      </a-row>

      <a-pagination show-quick-jumper
        show-size-changer
        :defaultPageSize="this.pageSize"
        :pageSizeOptions="['10', '25', '50', '100']"
        :total="this.totalRecords" @change="onPageChange"
        @showSizeChange="onShowSizeChange"/>

    </div>
  </div>
</template>

<script src="./P5List.js" />
<style scoped src="./P5List.css"></style>
