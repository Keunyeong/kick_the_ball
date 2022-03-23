import create from "zustand";

const useStore = create((set) => ({
  name: "name",
  setName(name) {
    set(() => ({
      name: name,
    }));
  },
}));

export { useStore };
