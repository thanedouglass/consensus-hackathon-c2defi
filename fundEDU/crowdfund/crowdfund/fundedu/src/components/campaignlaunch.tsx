/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QKSRCYoGown
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <HandHeartIcon className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-teal-600">FundEDU</h1>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="text-gray-600" prefetch={false}>
              Create Campaign
            </Link>
            <Link href="#" className="text-gray-600" prefetch={false}>
              How it Works
            </Link>
            <Button className="bg-teal-500 text-white">Connect Wallet</Button>
            <Button variant="ghost">
              <MoonIcon className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex flex-col items-center py-12 px-6">
        <Link href="#" className="flex items-center space-x-2 text-teal-600 mb-6" prefetch={false}>
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        <h2 className="text-3xl font-bold mb-4">
          Create a New Campaign <MegaphoneIcon className="inline h-6 w-6" />
        </h2>
        <Card className="w-full max-w-lg">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="min-contribution">Minimum Contribution Amount</Label>
              <div className="flex">
                <Input id="min-contribution" placeholder="Minimum Contribution Amount" className="flex-1" />
                <span className="flex items-center px-3 bg-gray-100 border border-l-0 border-gray-300">ETH</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="campaign-name">Campaign Name</Label>
              <Input id="campaign-name" placeholder="Campaign Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="campaign-description">Campaign Description</Label>
              <Textarea id="campaign-description" placeholder="Campaign Description" className="min-h-[100px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input id="image-url" placeholder="Image URL" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="target-amount">Target Amount</Label>
              <div className="flex">
                <Input id="target-amount" placeholder="Target Amount" className="flex-1" />
                <span className="flex items-center px-3 bg-gray-100 border border-l-0 border-gray-300">ETH</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button className="w-full bg-teal-500 text-white">Connect Wallet</Button>
            <div className="mt-4 w-full text-center bg-yellow-100 text-yellow-800 p-2 rounded">
              <CircleIcon className="inline h-5 w-5 mr-1" />
              Please Connect Your Wallet First to Create a Campaign
            </div>
          </CardFooter>
        </Card>
      </main>
      <footer className="w-full bg-gray-100 py-6 mt-auto">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <TrashIcon className="h-5 w-5" />
            <span>by Harsh, Hritvik, Nischal & Aaditya</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-gray-600" prefetch={false}>
              Github
            </Link>
            <Link href="#" className="text-gray-600" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <GlobeIcon className="h-5 w-5 text-gray-600" />
            <TwitterIcon className="h-5 w-5 text-gray-600" />
            <PinIcon className="h-5 w-5 text-gray-600" />
            <InstagramIcon className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function CircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function HandHeartIcon(props) {
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
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MegaphoneIcon(props) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}


function MoonIcon(props) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PinIcon(props) {
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
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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