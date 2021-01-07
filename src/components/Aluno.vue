<template>
  <q-item>
    <q-card class="" style="width: 300px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Componente Aluno</div>
      </q-card-section>

      <q-card-section>
        <q-list v-if="aulasCompletas.length">
          <q-item
            clickable
            v-ripple
            v-for="(aula, index) in aulasCompletas"
            :key="index"
          >
            <q-item-section class="col-10">
              <q-item-label>Curso: {{ aula.nome }}</q-item-label>
              <q-item-label caption>Duração: {{ aula.duracao }}h</q-item-label>
            </q-item-section>
            <q-item-section class="col-2">
              <q-icon name="check" color="secondary" style="font-size: 2rem;"/>
            </q-item-section>
          </q-item>
        </q-list>
        <q-item clickable v-ripple v-else>
          <q-item-section>
            <q-item-label>Nenhum curso finalizado D=</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Aluno',
  computed: {
    ...mapState('aulas', ['aulasCompletas'])
  }
}
</script>
