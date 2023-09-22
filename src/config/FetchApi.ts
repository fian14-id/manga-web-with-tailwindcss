import axios from "axios";

// jika punya API sendiri bisa diubah asalkan mengerti cara fetch api
const apiKey = "https://manga-api-blue.vercel.app/api";

// saya menggunakan nama function sesuai fungsinya
export const searchManga = async(q: string) => {
    try {
        const search = await axios.get(`${apiKey}/search/${q}`)        
        return search.data.manga_list
    } catch (err) {
        console.log(err);
        return err
    }
}

export const popularManga = async() => {
    try {
      const popular = await axios.get(`${apiKey}/manga/popular/1`);
      return popular.data.manga_list
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const RecommendManga = async() => {
    try {
      const recomd = await axios.get(`${apiKey}/recommended`);
      return recomd.data.manga_list
    } catch (err) {
        console.log(err);
        return err;
    }
}

// karena API tidak mendukung genre jadinya dibatalkan fitur tersebut
export const GenreManga = async() => {
    try {
      const genre = await axios.get(`${apiKey}/genres`);
      console.log({ genre: genre.data.list_genre });
      return genre.data.list_genre;
    } catch (err) {
        console.log(err);
        return err;
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
        return err;
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
        return err;
    }
}
