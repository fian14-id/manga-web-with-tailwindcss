import axios from "axios";

const apiKey = "https://manga.fian014.site/api";

export const searchManga = async(q: string) => {
    try {
        const search = await axios.get(`${apiKey}/search/${q}`)        
        return search.data.manga_list
    } catch (err) {
        console.log(err);
    }
}

export const popularManga = async() => {
    try {
      const popular = await axios.get(`${apiKey}/manga/popular/1`);
      console.log({ popularManga: popular.data.manga_list });
      return popular.data.manga_list
    } catch (err) {
        console.log(err);
    }
}

export const RecommendManga = async() => {
    try {
      const recomd = await axios.get(`${apiKey}/recommended`);
      console.log({ recomManga: recomd.data.manga_list });
      return recomd.data.manga_list
    } catch (err) {
        console.log(err);
    }
}

export const GenreManga = async() => {
    try {
      const genre = await axios.get(`${apiKey}/genres`);
      console.log({ genre: genre.data.list_genre });
      return genre.data.list_genre;
    } catch (err) {
        console.log(err);
    }
}

export const DetailManga = async(endpoint: string) => {
    try {
      const detail = await axios.get(
        `${apiKey}/manga/detail/${endpoint}`
      );
      return detail.data;
    } catch (err) {
        console.log(err);
    }
}

export const ChapterManga = async(endpoint: string) => {
    try {
      const detail = await axios.get(
        `${apiKey}/chapter/${endpoint}`
      );
      return detail.data;
    } catch (err) {
        console.log(err);
    }
}