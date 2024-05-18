import { create } from "zustand";

const thoughtsURL = "https://wen-happy-thoughts-api.onrender.com/thoughts";

export const useThoughtStore = create((set, get) => ({
  thoughts: null,
  loading: false,
  likedThoughts: [],
  sentThoughts: [],
  error: null,
  filter: "all",
  fetchThoughts: async () => {
    set({ loading: true, error: null, filter: "all" });
    try {
      const res = await fetch(thoughtsURL);
      if (!res.ok) {
        throw new Error("Failed to fetch thoughts");
      }
      const data = await res.json();
      set({ thoughts: data });
    } catch (error) {
      set({ error: `Error fetching thoughts: ${error.message}` });
    } finally {
      set({ loading: false });
    }
  },
  postThought: async message => {
    try {
      const res = await fetch(thoughtsURL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ message: message }),
      });
      if (!res.ok) {
        throw new Error("Failed to post thoughts");
      }
      const data = await res.json();
      set(state => ({
        thoughts: [data, ...state.thoughts],
        sentThoughts: [...state.sentThoughts, data],
      }));
    } catch (error) {
      set({ error: `Error posting thoughts: ${error.message}` });
    }
  },
  likeThought: async (thoughtID, action) => {
    try {
      const res = await fetch(`${thoughtsURL}/${thoughtID}/${action}`, {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Failed to update likes");
      }
      const data = await res.json();
      get().recordLikedThoughts(data);
    } catch (error) {
      set({ error: `Failed to post likes: ${error.message}` });
    }
  },
  recordLikedThoughts: thought => {
    if (get().likedThoughts.find(el => el._id === thought._id)) {
      set(state => ({
        likedThoughts: state.likedThoughts.filter(el => el._id !== thought._id),
      }));
    } else {
      set(state => ({
        likedThoughts: [...state.likedThoughts, thought],
      }));
    }
  },
  setFilter: filter => {
    set({ filter: filter });
    if (filter === "all") {
      get().fetchThoughts();
    }
  },
  setError: message => {
    if (message) {
      set({ error: message });
    } else {
      set({ error: null });
    }
  },
}));
