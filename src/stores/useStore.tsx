import create from 'zustand'

type StoreState = {
    clicked: number,
    urls: Array<{path: string, image: string, name: string}>
    setClicked: (newVal: any) => any
}
const useStore = create<StoreState>(set => ({
    clicked: 0,
    urls:[{
        name: "home",
        path: "home",
        image: "https://picsum.photos/1920/1080"
    },
    {
        name: "learn",
        path: "learn",
        image: "https://picsum.photos/1920/1080?random=1"
    },
    {
        name: "about",
        path: "about",
        image: "https://picsum.photos/1920/1080?random=2"
    },
    {
        name: "build",
        path: "build",
        image: "https://picsum.photos/1920/1080?random=3"
    }

],
    setClicked: (newVal) => set((state) => ({ clicked: state.clicked = newVal }))
}))

export default useStore