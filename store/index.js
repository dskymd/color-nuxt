export const state = () => ({
	color: 0xECFF00,
    prevcolor: 0xFFFFFF,
    prevcolors: [],
    counter: 0
})

export const mutations = {
    increment(state, prop) {
        state.counter += prop
    },

    setColor(state, newcolor) {

        state.prevcolor = state.color

        state.color = newcolor

    },
}