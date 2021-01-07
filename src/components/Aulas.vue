<template>
  <q-item>
    <q-card class="" style="width: 300px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Componente Aulas</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item clickable v-ripple v-for="(aula, index) in aulas" :key="index">
            <q-item-section class="col-10">
              <q-item-label>Curso: {{ aula.nome }}</q-item-label>
              <q-item-label caption>Duração: {{ aula.duracao }}h</q-item-label>
            </q-item-section>
            <q-item-section class="col-2">
              <q-btn round color="secondary" icon="check" @click="COMPLETAR_CURSO(aula)"/>
              <q-tooltip
                anchor="center left"
                self="center right"
                content-class="bg-primary"
              >
                Completar Curso
              </q-tooltip>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Aulas',
  data () {
    return {}
  },
  computed: {
    ...mapState('aulas', ['aulas', 'teste'])
  },
  methods: {
    ...mapMutations('aulas', ['COMPLETAR_CURSO'])
  }
}
</script>
