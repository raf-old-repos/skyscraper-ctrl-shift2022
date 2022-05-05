import create from 'zustand'

type StoreState = {
    clicked: number,
    urls: Array<{path: string, image: string}>
    setClicked: (newVal: any) => any
}
const useStore = create<StoreState>(set => ({
    clicked: 0,
    urls:[{
        path: "",
        image: "https://picsum.photos/1920/1080"
    },
    {
        path: "learn",
        image: "https://picsum.photos/1920/1080?random=1"
    },
    {
        path: "about",
        image: "https://picsum.photos/1920/1080?random=2"
    },
    {
        path: "build",
        image: "https://picsum.photos/1920/1080?random=3"
    }

],
    setClicked: (newVal) => set((state) => ({ clicked: state.clicked = newVal }))
}))

export default useStore