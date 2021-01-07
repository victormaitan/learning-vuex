import { Notify } from 'quasar'

const COMPLETAR_CURSO = (state, payload) => {
  if (state.aulasCompletas.includes(payload)) {
    Notify.create({
      message: 'Você já completou este curso!',
      position: 'top',
      type: 'warning'
    })
  } else {
    state.aulasCompletas.push(payload)
  }
}

export { COMPLETAR_CURSO }
