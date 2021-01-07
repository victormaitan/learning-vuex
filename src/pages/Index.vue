<template>
  <q-page class="flex flex-center">
    <div class="row">
      <Aluno/>
      <Aulas/>
    </div>
  </q-page>
</template>

<script>
import Aulas from '../components/Aulas'
import Aluno from '../components/Aluno'
export default {
  name: 'Index',
  components: { Aulas, Aluno }
}
</script>
