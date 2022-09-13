import create from 'zustand'

const useStore = create((set) => ({

    dataZustand: [],

    addValue: (obj) => set((state) => ({
        dataZustand: [...state.dataZustand, obj]
    })),


    deleteValue: (obj) => set(() => ({
        dataZustand: [...obj]
    }))
}))
export default useStore