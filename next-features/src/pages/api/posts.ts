import { NextApiRequest, NextApiResponse } from "next";

type PostType = {
  id: number;
  video: string;
  title: string;
  content: string;
  date: string;
};

// API Response type
type ResponseData = {
  posts: PostType[];
};

// Handler receives the request and returns a response with a given status and optional body
export default function handler(
  req: NextApiRequest, // Request with search/URL params and other options
  res: NextApiResponse<ResponseData> // Response with Generics type
) {
  // Request response
  res.status(200).json({
    posts: [
      {
        id: 1,
        video: "https://www.youtube.com/embed/-6JwElEt49w",
        title:
          "Git e GitHub: Como subir meu primeiro projeto? Como versionar um projeto? #BaseDev #DevIniciante",
        content:
          "Você que ta dando seus primeiros passos como dev, chegou a hora de aprender a usar o GitHub pra guardar seus projetos! Nesse vídeo vamos juntos subir um projeto do ZERO, explicando passo a passo, lendo as mensagens pra você de hoje em diante usar pra sempre!",
        date: "21/01/2022",
      },
    ],
  });
}
