
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">pika.rip</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        </nav>
      </header>
      <main className="py-6 lg:py-12 xl:py-24 flex flex-col gap-6">
        <div className="mx-auto max-w-3xl space-y-4 px-4">
          <div className="flex flex-col items-center space-y-4">
            <img
              alt=""
              className="rounded-full"
              height="96"
              src="https://cdn.discordapp.com/attachments/1148256815897915422/1206496010507919370/d5c49949197c80c436c7eec805e1101a18adcebf_hq.jpg?ex=65dc37f8&is=65c9c2f8&hm=2ef76c34d47b4e25d76a00fc788916c38371607b5f7cd2d97f5b1fa92cee5b6b&"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Brianna</h1>
              <p className="text-sm tracking-wide/0.05em text-gray-500 dark:text-gray-400">@othg</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <CodeIcon className="w-6 h-6" />
              <p className="text-sm tracking-wide/0.05em text-gray-500 dark:text-gray-400">github.com/almostgen</p>
            </div>
            <div className="flex items-center gap-2">
              <TwitterIcon className="w-6 h-6" />
              <p className="text-sm tracking-wide/0.05em text-gray-500 dark:text-gray-400">twitter.com/almostgen</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 px-4">
          <div className="grid gap-4">
            <h2 className="text-center text=font-bold tracking-tighter sm:text-3xl">Skills</h2>
            <p class="text-center">Project Management</p>
            <p class="text-center">Team Collaboration</p>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-center gap-2">
              </div>
              <div className="flex items-center gap-2">
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-center font-bold tracking-tighter sm:text-3xl">Experience</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-center font-bold">Server Developer / Manager</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">click <a href="https://www.shecodes.io/">| here |</a> for all my experience</p>
              </div>
              <div className="">
                <div className="">
                  <p className="text-center">
                  My name Is Brianna (bri or rey also works) Im a developer / server manager who strives to help servers In any way possible.
                When It comes down to the actual meat and potaoes of Server Management & Development I am one of the best choices In the field
                  </p>
                
                </div>
                <div className="grid gap-0.5">
                  <p className="text-sm tracking-wide/0.05em">

                  </p>
                  <p className="text-sm tracking-wide/0.05em"></p>
                  <p className="text-sm tracking-wide/0.05em">

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Contact </h2>
            <p class="text-center">To get in contact with me <a href="https://discord.com/users/945161806035419207">click here</a>!</p>
            <div className="mx-auto w-full max-w-sm space-y-4">
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
