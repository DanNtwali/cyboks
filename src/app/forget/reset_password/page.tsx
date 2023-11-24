import { FormInput } from "@/components/form_input";

export default function ForgetPassword() {
  
    return (
        <main className="bg-slate-50 xl:px-56 lg:px-36 md:px-28 sm:px-16 px-8 pt-16 h-screen">
            <div className="bg-cover bg-[url('../assets/images/reset_bg.png')] lg:px-36 md:px-28 sm:px-16 px-8 rounded-2xl shadow-xl">
              <h1 className="text-white font-bold text-center py-16 text-4xl">Reset Password</h1>
              <form action="">
                <FormInput 
                    labelClass="text-gray-700 text-sm text-white font-normal font-['Open Sans']"
                    containerClass="xl:px-36 md:px-16 sm:px-16 px-8 pb-8" 
                    labelName='Type new password' 
                    inputType='password' 
                    inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                    inputName='newPassword' 
                    inputPlaceholder='Your new password' 
                />
                <FormInput 
                    labelClass="text-gray-700 text-sm text-white font-normal font-['Open Sans']"
                    containerClass="xl:px-36 md:px-16 sm:px-16 px-8 pb-8" 
                    labelName='Confirm your password' 
                    inputType='password' 
                    inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                    inputName='confirmPassword' 
                    inputPlaceholder='Confirm password' 
                />
                <div className="flex flex-col items-center justify-center">

                    <button className="bg-white hover:bg-green-50 text-violet-500 font-semibold py-2 my-11 w-1/4 rounded-lg border">
                        Submit
                    </button>
                </div>
              </form>
            </div>
            <p className="text-white text-xl font-normal font-['Open Sans'] text-center absolute inset-x-0 bottom-3">Terms and conditions | FCyboks</p>
        </main>
    )
}