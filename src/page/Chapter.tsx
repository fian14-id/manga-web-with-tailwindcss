import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChapterManga } from "../config/FetchApi";

interface ChapterImage {
  chapter_id: string;
  chapter_image_link: string;
}

interface Image {
  chapter_endpoint: string;
  title: string;
  chapter_image: ChapterImage[];
}

const Chapter: React.FC = () => {
  const { endpoint = "" } = useParams<{ endpoint: string }>();
  const [chapter, setChapter] = useState<Image>({
    chapter_endpoint: "",
    title: "",
    chapter_image: [],
  });

  useEffect(() => {
    ChapterManga(endpoint)
      .then((res) => {
        setChapter(res);
      })
      .catch((err) => console.log(err));
  }, [endpoint]);

  console.log(chapter);

  return (
    <main className="text-center flex flex-col items-center mt-8">
      <h1 className="font-bold w-11/12 sm:w-1/2 text-md sm:text-2xl mb-4">
        {chapter.title}
      </h1>
      <span className="divider"></span>
      <ol className="flex flex-col justify-center items-center">
        {chapter.chapter_image.map((image) => (
          <li key={image.chapter_id} className="w-full md:w-11/12">
            <img
              className="min-w-full min-h-full"
              src={image.chapter_image_link}
              alt={image.chapter_id}
              loading="lazy"
            />
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Chapter;
