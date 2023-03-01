import axios from "axios";

const endpoint = "https://manga.fian014.site/api";

export const searchManga = async(q: string) => {
    try {
        const search = await axios.get(`${endpoint}/search/${q}`)
        return
    } catch (err) {
        console.log(err);
    }
}

export const popularManga = async() => {
    try {
      const popular = await axios.get(`${endpoint}/manga/popular/1`);
      console.log({ popularManga: popular.data.manga_list });
      return popular.data.manga_list
    } catch (err) {
        console.log(err);
    }
}

export const RecommendManga = async() => {
    try {
      const recomd = await axios.get(`${endpoint}/recommended`);
      console.log({ recomManga: recomd.data.manga_list });
      return recomd.data.manga_list
    } catch (err) {
        console.log(err);
    }
}

export const GenreManga = async() => {
    try {
      const genre = await axios.get(`${endpoint}/genres`);
      console.log({ genre: genre.data.list_genre });
      return genre.data.list_genre;
    } catch (err) {
        console.log(err);
    }
}