import create from 'zustand'

type StoreState = {
    clicked: number,
    urls: Array<string>
    setClicked: (newVal: any) => any
}
const useStore = create<StoreState>(set => ({
    clicked: 0,
    urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => `/${val}.jpg`),
    setClicked: (newVal) => set((state) => ({ clicked: state.clicked = newVal }))
}))

export default useStore