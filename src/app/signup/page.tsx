"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FormInput } from "../../components/form_input";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
export default function Home() {
  const [CyboksTeamVisible, setCyboksTeamVisible] = useState(true);
  const [ncsaTeamVisible, setNcsaTeamVisible] = useState(false);
  const [CyboksClientVisible, setCyboksClientVisible] = useState(false);

  const handleCyboksTeamClick = () => {
    setCyboksTeamVisible(true);
    setNcsaTeamVisible(false);
    setCyboksClientVisible(false);
  };

  const handleNcsaTeamClick = () => {
    setCyboksTeamVisible(false);
    setNcsaTeamVisible(true);
    setCyboksClientVisible(false);
  };

  const handleCyboksClientClick = () => {
    setCyboksTeamVisible(false);
    setNcsaTeamVisible(false);
    setCyboksClientVisible(true);
  };
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (email.endsWith("@africCyboks.com")) {
      router.push("/dashboard_Cyboks");
    } else if (email.endsWith("@ncsa.gov.rw")) {
      router.push("/dashboard_ncsa");
    } else {
      router.push("/dashboard_dpo");
    }
  };
  return (
    <main className="sm:flex sm:flex-row w-full h-screen bg-cover bg-[url('../assets/images/signup_bg.png')]">
      <div className=" mt-2 pl-2">
      <Image
          src={logo}
          width={100}
          height={100}
          alt="The log in background"
          className="max-w-lg mx-auto pt-4"
        />
      </div>
      <div className="bg-black bg-opacity-0 sm:rounded-l-xl rounded-xl h-screen w-full ">
        <div className="item-center bg-black bg-opacity-60 sm:rounded-xl rounded-2xl h-3/4 mt-20 mb-20 ml-18 mr-20 overflow-y-auto scrollbar-hide">
          <h1 className="mt-1 text-center text-white text-xl font-semibold">
            Register Your Account
          </h1>
          <h2 className="mt-1 text-center text-gray-300 font-extralight">
            Fill in the details bellow
          </h2>
          <div className="ml-20">
            <form className="ml-20">
              <div className="ml-20">
                <h3 className="text-white mt-4 ml-20">
                  Pinpoint your description
                </h3>
                <label className="mt-1 flex items-center ml-20">
                  <div className="">
                    <input
                      name="personelselection"
                      type="checkbox"
                      className="w-4 h-4 text-white bg-white border-violet-500 focus:ring-0 dark:focus:ring-0 dark:ring-offset-violet-700 focus:ring-0 dark:bg-violet-600 dark:border-white"
                      checked={CyboksTeamVisible}
                      onChange={handleCyboksTeamClick}
                    />
                    <span className="ml-2 text-sm text-white font-semibold ">
                      Cyboks Team
                    </span>
                  </div>
                  <div className="ml-6">
                    <input
                      name="personelselection"
                      type="checkbox"
                      className="w-4 h-4 text-white bg-white border-violet-400 focus:ring-0 dark:focus:ring-0 dark:ring-offset-green-800 focus:ring-0 dark:bg-green-700 dark:border-white"
                      checked={ncsaTeamVisible}
                      onChange={handleNcsaTeamClick}
                    />
                    <span className="ml-2 text-sm text-white font-semibold ">
                      NCSA Team
                    </span>
                  </div>
                  <div className="ml-6">
                    <input
                      name="personelselection"
                      type="checkbox"
                      className="w-4 h-4 text-white bg-violet-400 border-violet-400 focus:ring-0 dark:focus:ring-0 dark:ring-offset-violet-700 focus:ring-0 dark:bg-violet-600 dark:border-white"
                      checked={CyboksClientVisible}
                      onChange={handleCyboksClientClick}
                    />
                    <span className="ml-2 text-sm text-white font-semibold ">
                      Cyboks Client
                    </span>
                  </div>
                </label>
              </div>
              <div className="ml-20">
                <div
                  className={
                    CyboksTeamVisible ? "flex items-center mt-4 ml-20" : ""
                  }
                >
                  {CyboksTeamVisible && (
                    <div className="w-full">
                      <div className="flex">
                        <div className="flex items-center mt-2">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans'] rounded-md"
                            containerClass=""
                            labelName="Cyboks Representative Name"
                            inputType="text"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="Name Of The DPO"
                            inputPlaceholder="Cyboks representative name"
                          />
                        </div>
                        <div className="flex items-center mt-4 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Cyboks Representative Email"
                            inputType="email"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="email"
                            inputPlaceholder="Cyboks representatives email"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex items-center mt-4">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Password"
                            inputType="password"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="password"
                            inputPlaceholder="password"
                          />
                        </div>
                        <div className="flex items-center mt-4 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Confirm Password"
                            inputType="password"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="password"
                            inputPlaceholder="confirm password"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={
                    ncsaTeamVisible ? "flex items-center mt-4 ml-20" : ""
                  }
                >
                  {ncsaTeamVisible && (
                    <div className="w-full">
                      <div className="flex">
                        <div className="flex items-center mt-4">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="NCSA Representative Name"
                            inputType="text"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="Name Of The DPO"
                            inputPlaceholder="NCSA representative name"
                          />
                        </div>
                        <div className="flex items-center mt-4 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="NCSA Representative Email"
                            inputType="email"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="email"
                            inputPlaceholder="NCSA representatives email"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex items-center mt-4">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Password"
                            inputType="password"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="password"
                            inputPlaceholder="password"
                          />
                        </div>
                        <div className="flex items-center mt-4 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Confirm Password"
                            inputType="password"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="password"
                            inputPlaceholder="confirm password"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={
                    CyboksClientVisible ? "flex items-center mt-1 ml-20" : ""
                  }
                >
                  {CyboksClientVisible && (
                    <div className="w-full">
                      <div className="flex">
                        <div className="flex items-center mt-1">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Name Of The Company"
                            inputType="text"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="Name Of The Company"
                            inputPlaceholder="Name Of The Company"
                          />
                        </div>
                        <div className="flex items-center mt-1 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Name Of The DPO"
                            inputType="text"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="Name Of The DPO"
                            inputPlaceholder="Name Of The DPO"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex items-center mt-1">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Email of the DPO"
                            inputType="email"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="email"
                            inputPlaceholder="email of the DPO"
                          />
                        </div>
                        <div className="flex items-center mt-1 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="DPOs Phone Number"
                            inputType="DPOs Phone Number"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="DPOs Phone Number"
                            inputPlaceholder="(+250) 7888321"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex items-center mt-1">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Password"
                            inputType="password"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="password"
                            inputPlaceholder="password"
                          />
                        </div>
                        <div className="flex items-center mt-1 ml-20">
                          <FormInput
                            labelClass="text-white text-l font-normal font-['Open Sans']"
                            containerClass=""
                            labelName="Confirm Password"
                            inputType="password"
                            inputClass="text-white rounded-md bg-black bg-opacity-0 border border-white text-sm focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5"
                            inputName="password"
                            inputPlaceholder="confirm password"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="ml-20">
                  <div className="ml-20 px-8 py-2">
                    <button
                      type="submit"
                      className="ml-20 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-2 rounded"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="ml-20">
                    <p className="ml-20 text-white">
                      Already have account?
                      <Link href="/" className="text-violet-500 font-bold">
                        {" "}
                        Login{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
