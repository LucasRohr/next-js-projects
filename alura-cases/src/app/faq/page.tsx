import { Link } from "../../components";

const FAQ_API_URL =
  "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

const getFaqData = async () => {
  const result = await fetch(FAQ_API_URL);

  if (result) {
    const parsedResponse = await result.json();

    return {
      faqList: parsedResponse,
    };
  }
};

export default async function FaqPage() {
  const faqData = await getFaqData();

  return (
    <div>
      <h1>Alura Cases FAQ</h1>
      <Link href="/" passHref>
        Go back to home
      </Link>

      <ul>
        {faqData?.faqList.map(({ question, answer }, index) => (
          <li key={index}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
              <br />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
