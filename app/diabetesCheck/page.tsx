import Quiz from "@/components/Quiz";
import { client } from "@/sanity/lib/client";
import { fetchUsers } from "../(auth)/actions/fetchUsers";
import { useNextSanityImage } from "next-sanity-image";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "questions"] | order(_createdAt asc)
  {
    question,
    answers,
    image
  }`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
}

const page = async () => {
  const questions = await getData();
  const user = await fetchUsers();
  const userId = user?.data.user.id;
  return (
    <section className="relative mx-auto min-h-[500px] flex flex-col w-[80%]   bg-logo-transparent md:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_1rem]">
      <Quiz questions={questions} userId={userId} />
    </section>
  );
};

export default page;
