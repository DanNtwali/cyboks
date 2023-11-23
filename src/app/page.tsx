 'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FormInput } from '@/components/form_input'
import { CheckToggle } from '@/components/check_toggle'
import { FormEvent } from 'react'
import logo from '../assets/images/logo.png'
import { link } from 'fs'

export default function Home() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (email.endsWith('@africaqs.com')) {
      router.push('/dashboard_aqs');
    } else if (email.endsWith('@ncsa.gov.rw')) {
      router.push('/dashboard_ncsa');
    } else {
      router.push('/dashboard_dpo');
    }
  };
  return (
    <main className="sm:flex sm:flex-row h-screen w-full bg-cover bg-[url('../assets/images/signup_bg.png')]">
      <div className="lg:w-1/2 w-full h-screen">
        <h1 className="text-4xl font-bold text-white mt-16 pb-2 text-center">Welcome Back</h1>
        <p className="text-center text-slate-300 text-lg font-bold font-['Open Sans'] leading-tight">Enter your email and password to sign in</p>
        <form onSubmit={handleSubmit}>
        <div className="py-8 sm:px-8 mt-2">
          <FormInput 
            labelClass="text-gray-700 text-sm text-white font-normal font-['Open Sans']"
            containerClass="px-16" 
            labelName='Email' 
            inputType='email' 
            inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='email' 
            inputPlaceholder='Email' 
          />
          <FormInput 
            labelClass="text-gray-700 text-sm text-white font-normal font-['Open Sans']"
            containerClass="px-16 pt-2" 
            labelName='Password' 
            inputType='password' 
            inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='password' 
            inputPlaceholder='Password' 
          />
          <div className="py-4 pl-16">
          <CheckToggle
            labelName="Remember me!"
            labelClass="ml-3 text-sm font-medium text-white dark:text-gray-300"
            inputClass="sr-only peer"
            containerClass="relative inline-flex items-center cursor-pointer"
            inputType="checkbox"
            bulletClass="w-11 h-4 bg-gray-200 rounded-full peer dark:peer-focus:ring-orange-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"
          />
          </div>
          <div className="px-16">
            <button 
            type='submit'
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 w-full rounded-xl">
              SIGN IN
            </button>
          </div>
          <div className="text-center py-4">
          <Link href="/forget" className="text-center text-orange-600 font-extrabold font-['Open Sans'] leading-tight">Forgot Password?</Link>
          <p className="text-white">Don't have an account? <Link href="/signup" className="text-center text-orange-600 font-extrabold font-['Open Sans'] leading-tight">Sign Up</Link></p>
          </div>
        </div>
        </form>
      </div>
      <div className="bg-black bg-opacity-30 lg:w-1/2 w-full h-screen sm:rounded-l-xl rounded-t-xl">
      <Image
          src={logo}
          width={400}
          height={400}
          alt="The log in background"
          className="max-w-lg mx-auto pt-4"
        />
        <h1 className="text-4xl font-bold text-white pt-8 py-2 text-center">Welcome</h1>
        <h1 className="text-4xl font-bold text-white py-2 text-center">Africa Quantitative Sciences</h1>
        <h1 className="text-4xl font-bold text-white py-2 text-center">Data Protection System</h1>
        <h1 className="text-4xl font-bold text-white py-2 text-center">AQSDP</h1>
           
      </div>
    </main>
  )
}
