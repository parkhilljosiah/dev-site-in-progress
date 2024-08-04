import envelope from "../../public/envelope.svg";
import file from "../../public/file-solid.svg";
import github from "../../public/github-brands-solid.svg";
import linkedin from "../../public/linkedin-in-brands-solid.svg";

export default function Home() {
  return (
    <main className="h-screen flex flex-col text-white font-black">
      <section className="flex flex-col items-center justify-center gap-4 flex-grow text-center p-2">
        <p className="text-3xl md:text-5xl">WORK IN PROGRESS</p>
        <p className="text-sm md:text-xl md:w-1/2 font-semibold">
          YOU HAVE DISCOVERED SOMETHING{" "}
          <span className="text-blue-600">LEGENDARY</span> IN THE MAKING. IN THE
          MEANTIME, CHECK OUT SOME RELEVANT LINKS.
        </p>
        <div className="flex gap-6 items-center justify-center">
          <a
            href="mailto:parkhilljosiah@gmail.com?subject=Saw Your Sick Skills and Want to Connect"
            target="_blank"
            rel="noreferrer"
          >
            <img src={envelope.src} className="h-6 md:h-8 hover:animate-pulse"></img>
          </a>
          <a
            href="/josiahParkhillResume.pdf"
            download="josiahParkhillResume"
            target="_blank"
            rel="noreferrer"
          >
            <img src={file.src} className="h-6 md:h-8 hover:animate-pulse"></img>
          </a>
          <a
            href="https://github.com/parkhilljosiah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github.src} className="h-6 md:h-8 hover:animate-pulse"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/josiah-parkhill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin.src} className="h-6 md:h-8 hover:animate-pulse"></img>
          </a>
        </div>
        <p className="text-base md:text-lg">JP</p>
      </section>
      <footer>
        <div className="bg-blue-500 h-2"></div>
        <div className="bg-blue-600 h-2"></div>
        <div className="bg-blue-700 h-2"></div>
      </footer>
    </main>
  );
}
