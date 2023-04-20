import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChapterManga, DetailManga } from "../config/FetchApi";
import Footer from "../component/Footer";

interface ChapterImage {
  chapter_id: string;
  chapter_image_link: string;
}

interface Chapter {
  chapter_id: string;
  chapter_title: string;
  chapter_endpoint: string;
}

interface Image {
  chapter_endpoint: string;
  chapter_name: string;
  chapter_image: ChapterImage[];
  chapter: Chapter[];
}

const Chapter: React.FC = () => {
  const [isFixed, setIsFixed] =useState(false)
  const [isList, setList] =useState(false)
  const { endpoint = "" } = useParams<{ endpoint: string }>();
  const [chapter, setChapter] = useState<Image>({
    chapter_endpoint: "",
    chapter_name: "",
    chapter_image: [],
    chapter: []
  });

  useEffect(() => {
    ChapterManga(endpoint)
      .then((res) => {
        setChapter(res);
      })
      .catch((err) => console.log(err));
  }, [endpoint]);

  const chapterNumMatch = endpoint.match(/chapter-(\d+)/);
  const chapterNum = chapterNumMatch ? chapterNumMatch[1] : "";
  const nextChapterNum = parseInt(chapterNum) + 1;
  const prevChapterNum = parseInt(chapterNum) - 1;
  const nextEndpoint = chapterNum
    ? endpoint.replace(/chapter-\d+/, `chapter-${nextChapterNum}`)
    : "";
  const prevEndpoint = chapterNum
    ? endpoint.replace(/chapter-\d+/, `chapter-${prevChapterNum}`)
    : "";
  const nextChapterUrl = `/chapter/${nextEndpoint}/`;
  const prevChapterUrl = `/chapter/${prevEndpoint}/`;

  const isChapterOption = (chapt_endpoint: string) => {
    window.scrollTo(0, 0);
    navigate(`${chapt_endpoint}`)
  }

  const Nav = () => {
    return (
      <nav className={`flex justify-between w-11/12 bg-base-100 py-4 px-6`}>
        <h1 className="font-bold capitalize w-full md:w-7/12 mt-4 text-lg sm:text-xl mb-4">
          {chapter.chapter_name ? chapter.chapter_name : "Masih Loading..."}
        </h1>
        <ul className="flex justify-center gap-2 items-center text-2xl">
          {/* <li>
            <label
              title="daftar chapter"
              onClick={() => alert("fitur belum tersedia")}
              className="uil uil-list-ui-alt px-2 rounded-md hover:shadow-lg bg-primary py-1"
            ></label>
          </li> */}
          <li>
            <button
              title="sebelum"
              onClick={() => isChapterOption(`${prevChapterUrl}`)}
              className="uil uil-arrow-left px-2 rounded-md hover:shadow-lg bg-primary py-1"
            ></button>
          </li>
          <li>
            <button
              title="lanjut"
              onClick={() => isChapterOption(`${nextChapterUrl}`)}
              className="uil uil-arrow-right px-2 rounded-md hover:shadow-lg bg-primary py-1"
            ></button>
          </li>
        </ul>
      </nav>
    );
  }

  const navigate = useNavigate()
  return (
    <main className="flex flex-col items-center mt-8">
      <Nav />
      <span className="divider"></span>
      <ol className="flex flex-col justify-center items-center">
        {chapter.chapter_image
          ? chapter.chapter_image.map((image) => (
              <li key={image.chapter_id} className="w-full md:w-11/12">
                <img
                  className="min-w-full min-h-full"
                  src={image.chapter_image_link}
                  alt={image.chapter_id}
                  loading="lazy"
                />
              </li>
            ))
          : "Loading"}
      </ol>
      <Nav />
      <Footer />
    </main>
  );
};

export default Chapter;
