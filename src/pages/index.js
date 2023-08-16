import LandingPage from "@/views/LandingPage";
export default function Home() {
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
    rel="stylesheet"
  />;
  <title>Home | Oria Community</title>;
  return (
    <main className={``}>
      <LandingPage />

      <div className="flex mt-20 justify-center items-center ">
        <h1 className="bg-purple-500 p-4 text-white rounded-full font-bold text-2xl">
          It's Just Demo
        </h1>
      </div>
    </main>
  );
}
